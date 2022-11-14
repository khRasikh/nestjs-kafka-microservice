export class CreatedFinanceRecord {
  constructor(
    public readonly createdId: string,
    public readonly unique_id: number,
    public readonly source_full_name: string,
    public readonly destination_full_name: string,
    public readonly bank_name: string,
    public readonly transfer_id: string,
    public readonly amount: number,
    public readonly currency: string,
  ) {}

  toString() {
    return JSON.stringify({
      createdId: this.createdId,
      unique_id: this.unique_id,
      source_full_name: this.source_full_name,
      destination_full_name: this.destination_full_name,
      bank_name: this.bank_name,
      transfer_id: this.transfer_id,
      amount: this.amount,
      currency: this.currency,
    });
  }
}
