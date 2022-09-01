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
exports.MicroController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const micro_service_1 = require("./micro.service");
const create_micro_dto_1 = require("./dto/create-micro.dto");
const update_micro_dto_1 = require("./dto/update-micro.dto");
let MicroController = class MicroController {
    constructor(microService) {
        this.microService = microService;
    }
    create(createMicroDto) {
        return this.microService.create(createMicroDto);
    }
    findAll() {
        return this.microService.findAll();
    }
    findOne(id) {
        return this.microService.findOne(id);
    }
    update(updateMicroDto) {
        return this.microService.update(updateMicroDto.id, updateMicroDto);
    }
    remove(id) {
        return this.microService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('createMicro'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_micro_dto_1.CreateMicroDto]),
    __metadata("design:returntype", void 0)
], MicroController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllMicro'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MicroController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneMicro'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MicroController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateMicro'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_micro_dto_1.UpdateMicroDto]),
    __metadata("design:returntype", void 0)
], MicroController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeMicro'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MicroController.prototype, "remove", null);
MicroController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [micro_service_1.MicroService])
], MicroController);
exports.MicroController = MicroController;
//# sourceMappingURL=micro.controller.js.map