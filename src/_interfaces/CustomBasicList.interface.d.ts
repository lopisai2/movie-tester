import { ReactNode } from "react";
/*eslint-disable @typescript-eslint/no-explicit-any*/
export interface CustomBasicListI<T> {
    data?: { [key: string]: any }[];    
    loading: boolean;
    hasMore: boolean;
    limit?: number;    
    className?: string;
    renderItem?: (item: any, index: number) => ReactNode;
    loadMoreData: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<InfiniteData<T | undefined, unknown>, Error>>;
}
