import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./user.schema").User>;
    findAll(): Promise<import("./user.schema").UserDocument[]>;
    findOne(id: string): Promise<import("./user.schema").UserDocument[]>;
    update(userId: string, updateUserDto: UpdateUserDto): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(userId: string): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
