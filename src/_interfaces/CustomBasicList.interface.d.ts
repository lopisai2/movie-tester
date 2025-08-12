export interface CustomBasicListI<T> {    
    loading: boolean;
    hasMore: boolean;
    loadMoreData: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<InfiniteData<T | undefined, unknown>, Error>>;
}