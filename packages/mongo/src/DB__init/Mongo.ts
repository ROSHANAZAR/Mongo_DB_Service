import { ReturnModelType } from "@typegoose/typegoose";
import { AnyParamConstructor, BeAnObject } from "@typegoose/typegoose/lib/types";


// This interface defines the methods for interacting with MongoDB documents.
export interface Mongo{
    /**
     * Saves a document to the specified model.
     * @param model - The model to save the document to.
     * @param documentData - The data of the document to be saved.
     * @returns A promise that resolves to the saved document.
     */
    saveDocument(model: ReturnModelType<any, BeAnObject>, documentData: any): Promise<any>;

    /**
     * Retrieves a single document from the specified model based on the provided filter.
     * @param model - The model to query.
     * @param filter - The filter criteria to find the document.
     * @returns A promise that resolves to the found document or null if not found.
     */
    getDocument(model: ReturnModelType<any, BeAnObject>, filter?: any): Promise<any>;

    /**
     * Retrieves multiple documents from the specified model based on the provided filter.
     * @param model - The model to query.
     * @param filter - The filter criteria to find the documents.
     * @returns A promise that resolves to an array of found documents.
     */
    getDocuments(model: ReturnModelType<any, BeAnObject>, filter?: any): Promise<any[]>;

    /**
     * Retrieves a document by its ID from the specified model.
     * @param model - The model to query.
     * @param id - The ID of the document to retrieve.
     * @returns A promise that resolves to the found document or null if not found.
     */
    getDocumentById(model: ReturnModelType<any, BeAnObject>, id: string): Promise<any | null>;

    /**
     * Updates a single document in the specified model.
     * @param model - The model to update the document in.
     * @param filter - The filter criteria to find the document.
     * @param updateData - The data to update the document with.
     * @returns A promise that resolves to the updated document or null if not found.
     */
    updateDocument(model: ReturnModelType<any, BeAnObject>, filter: any, updateData: any): Promise<any>;

    /**
     * Updates multiple documents in the specified model.
     * @param model - The model to update the documents in.
     * @param filter - The filter criteria to find the documents.
     * @param updateData - The data to update the documents with.
     * @returns A promise that resolves to the result of the update operation.
     */
    updateDocuments(model: ReturnModelType<any, BeAnObject>, filter: any, updateData: any): Promise<any>;

    /**
     * Updates a document by its ID in the specified model.
     * @param model - The model to update the document in.
     * @param id - The ID of the document to update.
     * @param updateData - The data to update the document with.
     * @returns A promise that resolves to the updated document or null if not found.
     */
    updateDocumentById(model: ReturnModelType<any, BeAnObject>, id: string, updateData: any): Promise<any | null>;

    /**
     * Deletes a single document from the specified model based on the provided filter.
     * @param model - The model to delete the document from.
     * @param filter - The filter criteria to find the document to delete.
     * @returns A promise that resolves to the deleted document or null if not found.
     */
    deleteDocument(model: ReturnModelType<any, BeAnObject>, filter: any): Promise<any>;

    /**
     * Deletes multiple documents from the specified model based on the provided filter.
     * @param model - The model to delete the documents from.
     * @param filter - The filter criteria to find the documents to delete.
     * @returns A promise that resolves to the result of the delete operation.
     */
    deleteDocuments(model: ReturnModelType<any, BeAnObject>, filter: any): Promise<any>;

    /**
     * Deletes a document by its ID from the specified model.
     * @param model - The model to delete the document from.
     * @param id - The ID of the document to delete.
     * @returns A promise that resolves to the deleted document or null if not found.
     */
    deleteDocumentById(model: ReturnModelType<any, BeAnObject>, id: string): Promise<any | null>;

    /**
     * Counts the number of documents in the specified model that match the provided filter.
     * @param model - The model to count documents in.
     * @param filter - The filter criteria to count the documents.
     * @returns A promise that resolves to the count of matching documents.
     */
    countDocuments(model: ReturnModelType<any, BeAnObject>, filter?: any): Promise<number>;

    /**
     * Checks if a document exists in the specified model based on the provided filter.
     * @param model - The model to check for document existence.
     * @param filter - The filter criteria to find the document.
     * @returns A promise that resolves to true if the document exists, false otherwise.
     */
    checkDocumentExists(model: ReturnModelType<any, BeAnObject>, filter: any): Promise<boolean>;
}