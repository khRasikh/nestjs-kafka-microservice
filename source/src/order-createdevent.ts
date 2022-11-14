export class OrderCreatedEvent {
    constructor(
        public readonly orderId: number,
        public readonly userId: number,
        public readonly price: number
        
    ){}
    toString(){
        return JSON.stringify({
            orderId: this.orderId,
            userId: this.userId,
            price: this.price,
        })
    }
}