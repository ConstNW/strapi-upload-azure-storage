import { init } from "../src";
import { ProviderUploadAzureStorage } from "../src/ProviderUploadAzureStorage";

describe("index", () => {
    describe("init", () => {
        it("should return an instance", () => {
            const mockOptions = {};
            const instance = init(mockOptions);

            expect(instance).toBeInstanceOf(ProviderUploadAzureStorage);
        });
    });
});
