import dotenv from 'dotenv';
import { MongoDB } from '@package/mongo';
import * as Models from '../model/index';
dotenv.config();
export class App{
    mongoDB: MongoDB;
    constructor() {
        // Initialize MongoDB connection
        this.mongoDB = new MongoDB(process.env.MONGODB_URI as string);
    }

    async addUser(data: Models.UserType): Promise<Models.UserType> {
        const user = await this.mongoDB.saveDocument(Models.UserModel, data);
        return user;
    }

    async getUserByEmail(emailId:String): Promise<Models.UserType | null> {
        const user = await this.mongoDB.getDocument(Models.UserModel, { email: emailId });
        return user;
    }

    async getUserById(id: string): Promise<Models.UserType | null> {
        const user = await this.mongoDB.getDocumentById(Models.UserModel, id);
        return user;
    }
    async updateUserAgeById(id: string, age: number): Promise<Models.UserType | null> {
        const user = await this.mongoDB.updateDocumentById(Models.UserModel, id, { age });
        return user;
    }

    async deleteUserById(id: string): Promise<Models.UserType | null> {
        const user = await this.mongoDB.deleteDocumentById(Models.UserModel, id);
        return user;
    }

    async getUsersAgeEquals(age: number): Promise<Models.UserType[]> {
        const users = await this.mongoDB.getDocuments(Models.UserModel, { age });
        return users;
    }
    async getAllUsers(): Promise<Models.UserType[]> {
        const users = await this.mongoDB.getDocuments(Models.UserModel);
        return users;
    }
    async countUsersByAge(age: number): Promise<number> {
        const count = await this.mongoDB.countDocuments(Models.UserModel, { age });
        return count;
    }

    async checkUserExists(emailId: string): Promise<boolean> {
        const exists = await this.mongoDB.checkDocumentExists(Models.UserModel, { email: emailId });
        return exists;
    }

    async deleteUsersByAge(age: number): Promise<number> {
        const result = await this.mongoDB.deleteDocuments(Models.UserModel, { age });
        return result.deletedCount || 0;
    }

    async updateUsersAgeByAge(oldAge: number, newAge: number): Promise<number> {
        const result = await this.mongoDB.updateDocuments(Models.UserModel, { age: oldAge }, { age: newAge });
        return result.modifiedCount || 0;
    }
    async updateUserByEmail(emailId: string, updateData: Partial<Models.UserType>): Promise<Models.UserType | null> {
        const user = await this.mongoDB.updateDocument(Models.UserModel, { email: emailId }, updateData);
        return user;
    }
    async deleteUserByEmail(emailId: string): Promise<Models.UserType | null> {
        const user = await this.mongoDB.deleteDocument(Models.UserModel, { email: emailId });
        return user;
    }
}

export const app= new App();