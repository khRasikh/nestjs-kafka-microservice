export declare class CreatedFinanceRecord {
    readonly createdId: string;
    readonly unique_id: number;
    readonly source_full_name: string;
    readonly destination_full_name: string;
    readonly bank_name: string;
    readonly transfer_id: string;
    readonly amount: number;
    readonly currency: string;
    constructor(createdId: string, unique_id: number, source_full_name: string, destination_full_name: string, bank_name: string, transfer_id: string, amount: number, currency: string);
    toString(): string;
}
