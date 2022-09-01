"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const uid_1 = require("uid");
const created_finance_record_1 = require("./interface/created-finance-record");
const created_user_in_finance_1 = require("./interface/created-user-in-finance");
let FinanceService = class FinanceService {
    constructor(financeClient) {
        this.financeClient = financeClient;
    }
    createFinance({ unique_id, source_full_name, destination_full_name, bank_name, currency, amount, transfer_id }) {
        const autoGenerateId = (0, uid_1.uid)();
        console.log(`A new finance record with ID#${unique_id} has been added successfully.`);
        return this.financeClient.emit("finance_list_created", new created_finance_record_1.CreatedFinanceRecord(autoGenerateId, unique_id, source_full_name, destination_full_name, bank_name, transfer_id, amount, currency));
    }
    createMobleService({ id, name, phone, payment, date }) {
        return this.financeClient.emit('finance_user_created', new created_user_in_finance_1.CreatedUserInFinance(id, name, phone, payment, date));
    }
};
FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('GET_CASH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], FinanceService);
exports.FinanceService = FinanceService;
//# sourceMappingURL=finance.service.js.map