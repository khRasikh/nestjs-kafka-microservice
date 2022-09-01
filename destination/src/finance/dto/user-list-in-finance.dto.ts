export class GetUsersInFinanceRequest {
    constructor( 
        public readonly id: string,
        public readonly name: string,
    ){}

    toString(){
        return JSON.stringify({
            id: this.id,
            name: this.name,
        })
    }
}