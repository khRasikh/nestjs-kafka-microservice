export class OrderRemovedEvent {
    constructor(
        public readonly userId: number,
     
        
    ){}
    toString(){
        return JSON.stringify({
            userId: this.userId,
            
        })
    }
}