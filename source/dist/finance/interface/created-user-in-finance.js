"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedUserInFinance = void 0;
class CreatedUserInFinance {
    constructor(id, name, phone, payment, date) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.payment = payment;
        this.date = date;
    }
    toString() {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            phone: this.phone,
            payment: this.payment,
            date: this.date
        });
    }
}
exports.CreatedUserInFinance = CreatedUserInFinance;
//# sourceMappingURL=created-user-in-finance.js.map