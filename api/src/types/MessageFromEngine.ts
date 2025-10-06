export const ORDER_PLACED = "ORDER_PLACED"

export type MessageFromEngine = {
    type: typeof ORDER_PLACED,
    payload: {
        oderId: string,
        executedQty: number,
        fills: {
            price: number,
            quantity: number,
            tradeId: number
        }[]
    }
}