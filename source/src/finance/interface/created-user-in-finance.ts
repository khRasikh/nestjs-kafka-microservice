export class CreatedUserInFinance {
    constructor(
        public readonly id: number,
        public readonly name: string, 
        public readonly phone: string, 
        public readonly payment: boolean, 
        public readonly date: string, 
    ){}
    
    toString(){
        return JSON.stringify({
            id: this.id,
            name: this.name,
            phone: this.phone,
            payment: this.payment,
            date: this.date
        })
    }
}