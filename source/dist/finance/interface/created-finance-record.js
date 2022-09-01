"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedFinanceRecord = void 0;
class CreatedFinanceRecord {
    constructor(createdId, unique_id, source_full_name, destination_full_name, bank_name, transfer_id, amount, currency) {
        this.createdId = createdId;
        this.unique_id = unique_id;
        this.source_full_name = source_full_name;
        this.destination_full_name = destination_full_name;
        this.bank_name = bank_name;
        this.transfer_id = transfer_id;
        this.amount = amount;
        this.currency = currency;
    }
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
exports.CreatedFinanceRecord = CreatedFinanceRecord;
//# sourceMappingURL=created-finance-record.js.map