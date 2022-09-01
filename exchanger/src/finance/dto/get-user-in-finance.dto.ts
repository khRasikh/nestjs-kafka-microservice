export class AddedUserInFinance {
    constructor(  
        public readonly id: number,
        public readonly name: string, 
        public readonly date: string, 
         ){} 

    toString(){
        return JSON.stringify({
            id: this.id,
            name: this.name, 
            date: this.date, 
        })
    }
}