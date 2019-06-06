// Type definitions for topcoder-api-utils

declare class TCAuth {
    constructor(config: object, logger: object);
    fetchV3Token(v2Token: object, cb: Function): void;
    login(username: string, password: string, cb: Function): void;
}

declare module 'topcoder-api-utils/TCAuth' {
    export = TCAuth;
}
