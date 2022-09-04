import { ProviderUploadOptions, ProviderUploadInstance, ProviderUploadFileInstance } from "./interface";

export class ProviderUploadAzureStorage implements ProviderUploadInstance {
    constructor(protected options: ProviderUploadOptions) {}

    async delete(file: ProviderUploadFileInstance): Promise<void> {
        console.log("delete", file);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    async upload(file: ProviderUploadFileInstance): Promise<void> {
        console.log("upload", file);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    async uploadStream(file: ProviderUploadFileInstance): Promise<void> {
        console.log("uploadStream", file);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
