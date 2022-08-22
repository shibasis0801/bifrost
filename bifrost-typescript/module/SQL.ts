export interface SQL {
    rawQuery: (string) => string[],
    cursor: {
        next: () => string
    }
}