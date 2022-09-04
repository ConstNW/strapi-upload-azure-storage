import { ReadStream } from "fs";

export interface ProviderUploadOptions {
    sizeLimit?: number;
}

export interface ProviderUpload {
    init(providerOptions: ProviderUploadOptions): ProviderUploadInstance;
}

export interface ProviderUploadInstance {
    delete(file: ProviderUploadFileInstance): Promise<void>;
    upload(file: ProviderUploadFileHandler): Promise<void>;
    uploadStream(file: ProviderUploadFileHandler): Promise<void>;
}

export interface ProviderUploadFileHandler extends ProviderUploadFileInstance {
    stream?: ReadStream;
    buffer?: Buffer;
}

export interface ProviderUploadFileInstance {
    name: string;
    alternativeText?: string;
    caption?: string;
    folder?: string;
    folderPath?: string;
    path: string;
    hash: string;
    ext: string;
    mime: string;
    size: string;
    tmpWorkingDirectory: string;
    related?: unknown[];
    formats?: Record<string, ProviderUploadFileInstance>;
}
