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
exports.FinanceController = void 0;
const common_1 = require("@nestjs/common");
const add_user_request_finance_dto_1 = require("./dto/add-user-request-finance.dto");
const create_finance_record_dto_1 = require("./dto/create-finance-record.dto");
const finance_service_1 = require("./finance.service");
let FinanceController = class FinanceController {
    constructor(getService) {
        this.getService = getService;
    }
    createFinanceRecord(postData) {
        return this.getService.createFinance(postData);
    }
    createUser(addUserData) {
        return this.getService.createMobleService(addUserData);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_finance_record_dto_1.CreateFinanceRequest]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createFinanceRecord", null);
__decorate([
    (0, common_1.Post)('addUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_request_finance_dto_1.addUserRequestInFinance]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createUser", null);
FinanceController = __decorate([
    (0, common_1.Controller)('finance'),
    __metadata("design:paramtypes", [finance_service_1.FinanceService])
], FinanceController);
exports.FinanceController = FinanceController;
//# sourceMappingURL=finance.controller.js.map