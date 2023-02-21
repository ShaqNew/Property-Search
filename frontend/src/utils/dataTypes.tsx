
export interface ITransaction {
    id: number
    lr_property_id: number
    date: String
    price: number
}
export type TTransactionList = ITransaction[]

export interface IProperty {
    id: number
    outcode: string
    incode: string
    paon: string
    saon: string|null
    street: string
    lrTransactions: TTransactionList
}

export type TPropertyList = IProperty[]
  