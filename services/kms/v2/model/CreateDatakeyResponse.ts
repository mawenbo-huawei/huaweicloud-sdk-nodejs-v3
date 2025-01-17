
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatakeyResponse extends SdkResponse {
    private 'key_id'?: string | undefined;
    private 'plain_text'?: string | undefined;
    private 'cipher_text'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateDatakeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withPlainText(plainText: string): CreateDatakeyResponse {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText() {
        return this['plain_text'];
    }
    public withCipherText(cipherText: string): CreateDatakeyResponse {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText() {
        return this['cipher_text'];
    }
}