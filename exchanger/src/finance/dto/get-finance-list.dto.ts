 
export class CreatedFinanceRequest {
    constructor( public readonly createdId: string,
        public readonly unique_id: number,
        public readonly source: string,
        public readonly destination: string,
        public readonly amount: number,
        public readonly currency: string,
        public readonly recievedDate: string){} 

    toString(){
        return JSON.stringify({
            createdId: this.createdId,
            unique_id: this.unique_id,
            source: this.source,
            destination: this.destination,
            amount: this.amount,
            currency: this.currency,
            recievedDate: this.recievedDate,
            
        })
    }
}