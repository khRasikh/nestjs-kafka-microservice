import { CreateMicroDto } from './create-micro.dto';
declare const UpdateMicroDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMicroDto>>;
export declare class UpdateMicroDto extends UpdateMicroDto_base {
    id: number;
}
export {};
