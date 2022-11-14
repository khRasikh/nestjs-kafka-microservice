export class CreatedUserInFinance {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly phone: string,
  ) {}

  toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      phone: this.phone,
    });
  }
}
