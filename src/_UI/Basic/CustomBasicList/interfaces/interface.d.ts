export interface CustomBasicListI {
    data: {[key: string]: string}[]
    page: number
    loading: boolean
    hasMore: boolean
    loadMoreData: ({ page, limit }: { page: number, limit: number }) => void
}