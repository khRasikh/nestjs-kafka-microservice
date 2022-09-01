export class GetFinanceListRequest {
    constructor( 
        public readonly createdId: string,
        public readonly unique_id: number,
        public readonly amount: number,
        public readonly currency: number
    ){}

    toString(){
        return JSON.stringify({
            createdId: this.createdId,
            unique_id: this.unique_id,
            amount: this.amount,
            currency: this.currency
        })
    }
}