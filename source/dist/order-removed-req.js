"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRemovedEvent = void 0;
class OrderRemovedEvent {
    constructor(userId) {
        this.userId = userId;
    }
    toString() {
        return JSON.stringify({
            userId: this.userId,
        });
    }
}
exports.OrderRemovedEvent = OrderRemovedEvent;
//# sourceMappingURL=order-removed-req.js.map