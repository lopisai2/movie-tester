import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getMoviesClient } from "../_services/GET/getMoviesClient";
import { useCustomBasicList } from "@/_hooks/useCustomBasicList";
import { MovieResultI } from "@/_interfaces/movies/Movie.interface";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export const useSearch = () => {
    const params = useSearchParams();
    const router = useRouter();
    const query = params.get("q") ?? "";
    const type = params.get("type") ?? "";
    const year = params.get("year") ?? "";

    const movieFilters = useMemo(() => ({
        type,
        year,
    }), [type, year])

    const handleUpdateFilters = (filters: Partial<typeof movieFilters>) => {
        const currentParams = new URLSearchParams(params.toString());
        const finalParams = { ...movieFilters, ...filters }
        
        Object.entries(finalParams).forEach(([key, value]) => {
            if (value) currentParams.set(key, value)
            else currentParams.delete(key)
            if (key === 'type' && value === 'all') currentParams.delete(key)
        })
        
        return router.push(`/search?${currentParams.toString()}`)
    }

    const {
        data: moviesData,
        fetchNextPage,
        hasNextPage,        
        isFetching,
        error,
    } = useInfiniteQuery({
        queryKey: ["search", query, year, type],
        initialPageParam: 1,
        queryFn: async ({ pageParam = 1 }) => {
            const res = await getMoviesClient({
                searchTerm: query,
                page: pageParam,
                year,
                type,
            });
            return res;
        },
        getNextPageParam: (data, pages) => {
            const totalItems = parseInt(data?.totalResults || "0", 10);
            if (pages.length * 10 < totalItems) return pages.length + 1;
            return undefined;
        },
        enabled: !!query,
    });

    const { sentinelRef } = useCustomBasicList<MovieResultI>({
        hasMore: hasNextPage,
        loading: isFetching,
        loadMoreData: fetchNextPage,
    });
    return {
        query,
        movieFilters,
        moviesData,
        isLoading: isFetching,
        hasNextPage,
        error,
        sentinelRef,
        handleUpdateFilters,
    }
}