export interface PaginatedResult<T> {
    count: number;
    limit: number;
    total: number;
    offset: number;
    result: T[];
}