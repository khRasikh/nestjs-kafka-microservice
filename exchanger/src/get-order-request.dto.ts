export class GetUserRequest {
  constructor(
    public readonly orderId: number,
    public readonly userId: number,
    public readonly price: number,
    public readonly info: string,
  ) {}

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
      info: this.info,
    });
  }
}
