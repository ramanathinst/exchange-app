export const CREATE_ORDER = "CREATE_ORDER"

export type MessageToEngine = {
    type : typeof CREATE_ORDER,
    data: {
        market: string,
        price: number,
        quantity: number,
        side: "buy" | "sell",
        userId: string,
    }
}