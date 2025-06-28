import { ReturnModelType } from "@typegoose/typegoose";
import { AnyParamConstructor, BeAnObject } from "@typegoose/typegoose/lib/types";
import { FilterQuery } from "mongoose";
import { UpdateWriteOpResult }  from 'mongoose';
import { DeleteResult } from 'mongoose';


// This interface defines the methods for interacting with MongoDB documents.
export interface Mongo{
    /**
     * Saves a document to the specified model.
     * @param model - The model to save the document to.
     * @param documentData - The data of the document to be saved.
     * @returns A promise that resolves to the saved document.
     */
    saveDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, documentData:T):Promise<T>;

    /**
     * Retrieves a single document from the specified model based on the provided filter.
     * @param model - The model to query.
     * @param filter - The filter criteria to find the document.
     * @returns A promise that resolves to the found document or null if not found.
     */
    getDocument<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>,filter?:FilterQuery<T>):Promise<T|null>

    /**
     * Retrieves multiple documents from the specified model based on the provided filter.
     * @param model - The model to query.
     * @param filter - The filter criteria to find the documents.
     * @returns A promise that resolves to an array of found documents.
     */
    getDocuments<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>,filter:FilterQuery<T>):Promise<T[]>;

    /**
     * Retrieves a document by its ID from the specified model.
     * @param model - The model to query.
     * @param id - The ID of the document to retrieve.
     * @returns A promise that resolves to the found document or null if not found.
     */
    getDocumentById<T>(model:ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string):Promise<T | null>;

    /**
     * Updates a single document in the specified model.
     * @param model - The model to update the document in.
     * @param filter - The filter criteria to find the document.
     * @param updateData - The data to update the document with.
     * @returns A promise that resolves to the updated document or null if not found.
     */
    updateDocument<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>, updateData: Partial<T>): Promise<T | null>;

    /**
     * Updates multiple documents in the specified model.
     * @param model - The model to update the documents in.
     * @param filter - The filter criteria to find the documents.
     * @param updateData - The data to update the documents with.
     * @returns A promise that resolves to the result of the update operation.
     */
    updateDocuments<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>, updateData: Partial<T>): Promise<UpdateWriteOpResult>;

    /**
     * Updates a document by its ID in the specified model.
     * @param model - The model to update the document in.
     * @param id - The ID of the document to update.
     * @param updateData - The data to update the document with.
     * @returns A promise that resolves to the updated document or null if not found.
     */
    updateDocumentById<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string, updateData: Partial<T>): Promise<T | null>;

    /**
     * Deletes a single document from the specified model based on the provided filter.
     * @param model - The model to delete the document from.
     * @param filter - The filter criteria to find the document to delete.
     * @returns A promise that resolves to the deleted document or null if not found.
     */
    deleteDocument<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>): Promise<T | null>;

    /**
     * Deletes multiple documents from the specified model based on the provided filter.
     * @param model - The model to delete the documents from.
     * @param filter - The filter criteria to find the documents to delete.
     * @returns A promise that resolves to the result of the delete operation.
     */
    deleteDocuments<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>): Promise<DeleteResult>;

    /**
     * Deletes a document by its ID from the specified model.
     * @param model - The model to delete the document from.
     * @param id - The ID of the document to delete.
     * @returns A promise that resolves to the deleted document or null if not found.
     */
    deleteDocumentById<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, id: string): Promise<T | null>;

    /**
     * Counts the number of documents in the specified model that match the provided filter.
     * @param model - The model to count documents in.
     * @param filter - The filter criteria to count the documents.
     * @returns A promise that resolves to the count of matching documents.
     */
    countDocuments<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter?: FilterQuery<T>): Promise<number>;

    /**
     * Checks if a document exists in the specified model based on the provided filter.
     * @param model - The model to check for document existence.
     * @param filter - The filter criteria to find the document.
     * @returns A promise that resolves to true if the document exists, false otherwise.
     */
    checkDocumentExists<T>(model: ReturnModelType<AnyParamConstructor<T>, BeAnObject>, filter: FilterQuery<T>): Promise<boolean>;
}