"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMicroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_micro_dto_1 = require("./create-micro.dto");
class UpdateMicroDto extends (0, mapped_types_1.PartialType)(create_micro_dto_1.CreateMicroDto) {
}
exports.UpdateMicroDto = UpdateMicroDto;
//# sourceMappingURL=update-micro.dto.js.map