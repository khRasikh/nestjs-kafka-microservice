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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(userData) {
        const createdUser = new this.UserModel(userData);
        return createdUser.save();
    }
    async findAll() {
        return this.UserModel.find().exec();
    }
    async findOne(userId) {
        return this.UserModel.find({ _id: userId }).exec();
    }
    async update(id, updatedData) {
        const myUpdate = await this.UserModel
            .findByIdAndUpdate(id, updatedData)
            .setOptions({ overwrite: true, new: true });
        if (!myUpdate) {
            throw new common_1.NotFoundException();
        }
        return myUpdate;
    }
    async remove(userId) {
        const deleted = await this.UserModel.findOneAndRemove({ _id: userId });
        return deleted;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map