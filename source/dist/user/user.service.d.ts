import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    create(userData: CreateUserDto): Promise<User>;
    findAll(): Promise<UserDocument[]>;
    findOne(userId: string): Promise<UserDocument[]>;
    update(id: string, updatedData: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(userId: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
