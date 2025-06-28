import  mongoose  from 'mongoose';
import dotenv from 'dotenv';
import { ReturnModelType } from '@typegoose/typegoose';
import { AnyParamConstructor, BeAnObject } from '@typegoose/typegoose/lib/types';
import { FilterQuery } from 'mongoose';
import { UpdateWriteOpResult }  from 'mongoose';
import { DeleteResult } from 'mongoose';
import { Mongo } from './Mongo';
dotenv.config();
export class MongoDB  {
    private connectionString: string;
    constructor(connectionString: string) {
       // Immediately initiate connection when an instance is created
        this.connectionString = connectionString;
        this.connect();
        console.log('MongoDB Atlas connected');
    }
    /**
     * Connects to MongoDB Atlas using the connection string from environment variables.
     * If the connection fails, it logs the error and exits the process.
     */
    private async connect() {
        try {
            console.log('MongoDB Atlas connecting...');
            return await mongoose.connect(this.connectionString);
        } catch (err: any) {
            console.error(err.message);
            process.exit(1);
        }
    }
    async saveDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, documentData:T):Promise<T>{
      return (await model.create(documentData)).toObject();
    };

    async getDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>,filter?:FilterQuery<T>):Promise<T|null>{
      return (await model.findOne(filter))?.toObject() || null;
    };

    async getDocuments<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>,filter:FilterQuery<T>={}):Promise<T[]>{
      return (await model.find(filter))?.map(doc => doc.toObject()) || [];
    };

    async getDocumentById<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string):Promise<T | null>  {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      return (await model.findById(id))?.toObject() || null;
    }

    async updateDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>, updateData: Partial<T>):Promise<T | null> {
      return (await model.findOneAndUpdate(filter, updateData, { new: true , runValidators: true}))?.toObject() || null;
    }

    async updateDocuments<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>, updateData: Partial<T>):Promise<UpdateWriteOpResult> {
      return await model.updateMany(filter, updateData, { new: true , runValidators: true})
    }

    async updateDocumentById<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string, updateData: Partial<T>):Promise<T | null> {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      return (await model.findByIdAndUpdate(id, updateData, { new: true , runValidators: true}))?.toObject() || null  ;
    }

    async deleteDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>):Promise<T | null> {
      return (await model.findOneAndDelete(filter))?.toObject() || null;
    }

    async deleteDocuments<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>):Promise<DeleteResult> {
      return await model.deleteMany(filter);
    }

    async deleteDocumentById<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string):Promise<T | null>{
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      return (await model.findByIdAndDelete(id))?.toObject() || null;
    }

    async countDocuments<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter?: FilterQuery<T>):Promise<number> {
      return await model.countDocuments(filter);
    }

    async checkDocumentExists<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>):Promise<boolean> {
      const count = await model.exists(filter);
      return count !== null;
    }
}