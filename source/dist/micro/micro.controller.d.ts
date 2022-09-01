import { MicroService } from './micro.service';
import { CreateMicroDto } from './dto/create-micro.dto';
import { UpdateMicroDto } from './dto/update-micro.dto';
export declare class MicroController {
    private readonly microService;
    constructor(microService: MicroService);
    create(createMicroDto: CreateMicroDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateMicroDto: UpdateMicroDto): string;
    remove(id: number): string;
}
