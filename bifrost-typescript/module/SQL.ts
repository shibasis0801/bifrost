export interface SQL {
    rawQuery(query: string): string,
    cursor: {
        next(): string
    }
}
