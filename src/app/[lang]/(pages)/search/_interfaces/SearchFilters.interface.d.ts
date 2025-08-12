export interface SearchFiltersI {
    movieFilters: { type: string; year: string };
    handleUpdateFilters: (
        filters: Partial<{
            type: string;
            year: string;
        }>
    ) => void;
}