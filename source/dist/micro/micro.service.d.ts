import { CreateMicroDto } from './dto/create-micro.dto';
import { UpdateMicroDto } from './dto/update-micro.dto';
export declare class MicroService {
    create(createMicroDto: CreateMicroDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMicroDto: UpdateMicroDto): string;
    remove(id: number): string;
}
