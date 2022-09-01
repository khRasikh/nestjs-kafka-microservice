import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(userData: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(userData);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.UserModel.find().exec();
  } 

  async findOne(userId: string): Promise<UserDocument[]> {
    return this.UserModel.find({_id: userId} ).exec(); 
  }
  
  async update(id: string, updatedData) {
    const myUpdate = await this.UserModel
      .findByIdAndUpdate(id, updatedData)
      .setOptions({ overwrite: true, new: true })
    if (!myUpdate) {
      throw new NotFoundException();
    }
    return myUpdate;
  }
 
  
  async remove(userId: string) {

    const deleted = await this.UserModel.findOneAndRemove({_id: userId})
    return deleted; 
  }
}
