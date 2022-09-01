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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const order_createdevent_1 = require("./order-createdevent");
const order_removed_req_1 = require("./order-removed-req");
let AppService = class AppService {
    constructor(sourceClient) {
        this.sourceClient = sourceClient;
    }
    getHello() {
        return 'Hello World!';
    }
    createOrder({ userId, price }) {
        console.log(userId + " has been created successfully.");
        const unique_id = Math.floor(Math.random() * 1000);
        return this.sourceClient.emit('order_created', new order_createdevent_1.OrderCreatedEvent(unique_id, userId, price));
    }
    removeOrder(userId) {
        console.log("user removed: " + userId);
        return this.sourceClient.emit('order_removed', new order_removed_req_1.OrderRemovedEvent(userId));
    }
    updateOrder(userId) {
        console.log("order has been updated: " + userId);
        return this.sourceClient.emit('order_updated', { updated_id: userId });
    }
    getOrders() {
        return this.sourceClient.send({ order_created: 'all_orders' }, {});
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('GET_CASH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map