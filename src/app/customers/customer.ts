export interface Transaction {
  date:any
  amount:number
  customer_id:number
  id:number

}
export interface Customer {
  id:number
  name:string,
  transactions:Transaction[]
}

