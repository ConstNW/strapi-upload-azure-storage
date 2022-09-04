import { ProviderUploadOptions, ProviderUploadInstance } from "./interface";
import { ProviderUploadAzureStorage } from "./ProviderUploadAzureStorage";

export const provider = "upload-azure-storage";

export const auth = {
    account: {
        label: "Account name",
        type: "text",
    },
    accountKey: {
        label: "Secret Access Key",
        type: "text",
    },
    serviceBaseURL: {
        label: "Base service URL to be used, optional. Defaults to https://${account}.blob.core.windows.net",
        type: "text",
    },
    containerName: {
        label: "Container name",
        type: "text",
    },
    defaultPath: {
        label: "The path to use when there is none being specified",
        type: "text",
    },
    maxConcurrent: {
        label: "The maximum concurrent uploads to Azure",
        type: "number",
    },
    cdnBaseURL: {
        label: "Expose public CDN URL instead of service URL",
        type: "text",
    },
};

export const init = (providerOptions: ProviderUploadOptions): ProviderUploadInstance => {
    return new ProviderUploadAzureStorage(providerOptions);
};
