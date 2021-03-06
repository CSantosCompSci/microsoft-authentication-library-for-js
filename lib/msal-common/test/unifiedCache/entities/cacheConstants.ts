import { AccessTokenEntity } from "../../../src/unifiedCache/entities/AccessTokenEntity";
import { IdTokenEntity } from "../../../src/unifiedCache/entities/IdTokenEntity";
import { RefreshTokenEntity } from "../../../src/unifiedCache/entities/RefreshTokenEntity";
import { AccountEntity } from "../../../src/unifiedCache/entities/AccountEntity";
import { AppMetadataEntity } from "../../../src/unifiedCache/entities/AppMetadataEntity";

// mock tokens
export const mockAccessTokenEntity_1 = {
    homeAccountId: "uid.utid",
    environment: "login.microsoftonline.com",
    credentialType: "AccessToken",
    clientId: "mock_client_id",
    secret: "an access token",
    realm: "microsoft",
    target: "scope1 scope2 scope3",
    cachedAt: "1000",
    expiresOn: "4600",
    extendedExpiresOn: "4600",
};

export const mockAccessTokenEntity_2 = {
    homeAccountId: "uid.utid",
    environment: "login.microsoftonline.com",
    credentialType: "AccessToken",
    clientId: "mock_client_id",
    secret: "an access token",
    realm: "microsoft",
    target: "scope4 scope5",
    cachedAt: "1000",
    expiresOn: "4600",
    extendedExpiresOn: "4600"
};

export const mockIdTokenEntity = {
    homeAccountId: "uid.utid",
    environment: "login.microsoftonline.com",
    credentialType: "IdToken",
    clientId: "mock_client_id",
    secret: "header.eyJvaWQiOiAib2JqZWN0MTIzNCIsICJwcmVmZXJyZWRfdXNlcm5hbWUiOiAiSm9obiBEb2UiLCAic3ViIjogInN1YiJ9.signature",
    realm: "microsoft"
};

export const mockRefreshTokenEntity = {
    homeAccountId: "uid.utid",
    environment: "login.microsoftonline.com",
    credentialType: "RefreshToken",
    clientId: "mock_client_id",
    secret: "a refresh token"
};

export const mockRefreshTokenEntityWithFamilyId = {
    homeAccountId: "uid.utid",
    environment: "login.microsoftonline.com",
    credentialType: "RefreshToken",
    clientId: "mock_client_id",
    secret: "a refresh token",
    familyId: "1"
};


export const mockAccountEntity = {
    homeAccountId: "uid.utid",
    environment:  "login.microsoftonline.com",
    realm: "microsoft",
    localAccountId: "object1234",
    username: "John Doe",
    authorityType: "MSSTS",
    clientInfo: "eyJ1aWQiOiJ1aWQiLCAidXRpZCI6InV0aWQifQ==",
};

export const mockAppMetaDataEntity = {
    clientId: "mock_client_id",
    environment: "login.microsoftonline.com",
    familyId: "1"
}

// generate mockCache
export class mockCache {

    static createMockATOne(): AccessTokenEntity {
        const at = new AccessTokenEntity();
        Object.assign(at, mockAccessTokenEntity_1);

        return at;
    }

    static createMockATTwo(): AccessTokenEntity {
        const at = new AccessTokenEntity();
        Object.assign(at, mockAccessTokenEntity_2);

        return at;
    }

    static createMockIdT(): IdTokenEntity {
        let idt = new IdTokenEntity();
        Object.assign(idt, mockIdTokenEntity);

        return idt;
    }

    static createMockRT(): RefreshTokenEntity {
        let rt = new RefreshTokenEntity();
        Object.assign(rt, mockRefreshTokenEntity);

        return rt;
    }

    static createMockRTWithFamilyId(): RefreshTokenEntity {
        let rt = new RefreshTokenEntity();
        Object.assign(rt, mockRefreshTokenEntityWithFamilyId);

        return rt;
    }

    static createMockAcc(): AccountEntity {
        let acc = new AccountEntity();
        Object.assign(acc, mockAccountEntity);

        return acc;
    }

    static createMockAmdt(): AppMetadataEntity {
        let amdt = new AppMetadataEntity();
        Object.assign(amdt, mockAppMetaDataEntity);

        return amdt;
    }
}

export const MockCache = {
    atOne: mockCache.createMockATOne(),
    atOneKey: mockCache.createMockATOne().generateAccessTokenEntityKey(),
    atTwo: mockCache.createMockATTwo(),
    atTwoKey: mockCache.createMockATTwo().generateAccessTokenEntityKey(),
    idT: mockCache.createMockIdT(),
    idTKey: mockCache.createMockIdT().generateIdTokenEntityKey(),
    rt: mockCache.createMockRT(),
    rtKey: mockCache.createMockRT().generateRefreshTokenEntityKey(),
    rtF: mockCache.createMockRTWithFamilyId(),
    rtFKey: mockCache.createMockRTWithFamilyId().generateRefreshTokenEntityKey(),
    acc: mockCache.createMockAcc(),
    accKey: mockCache.createMockAcc().generateAccountEntityKey(),
    amdt: mockCache.createMockAmdt(),
    amdtKey: mockCache.createMockAmdt().generateAppMetaDataEntityKey()
}
