/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/contacts": {
    readonly get: operations["getContacts"];
  };
  readonly "/contacts/{userUid}": {
    readonly get: operations["getContactInfo"];
  };
  readonly "/contacts/{userUid}/icon": {
    readonly get: operations["getContactIcon"];
  };
  readonly "/contacts/me": {
    readonly get: operations["getMyInfo"];
  };
  readonly "/contacts/me/icon": {
    readonly get: operations["getMyIcon"];
    readonly delete: operations["deleteMyIcon"];
  };
}

export interface components {
  readonly schemas: {
    /** Parent of most important objects */
    readonly BaseEntity: {
      /**
       * Format: nanoid
       * @deprecated
       * @description Test description with deprecated
       * @example njbusD52k6YoRG346tPgD
       */
      readonly uid?: string;
      /**
       * Format: date-time
       * @description It's date example
       * @example 1999-03-31 15:00:00.000
       */
      readonly created_at?: string;
      /**
       * Format: date-time
       * @example 2020-07-10 10:10:00.000
       */
      readonly updated_at?: string;
      /** @example false */
      readonly deleted?: boolean;
    };
    /** Image for preview */
    readonly Image: {
      /** @example https://shantichat.com/data/V1StGXR8_Z5jdHi6B-myT/white-rabbit.png */
      readonly url: string;
      /** @example 128 */
      readonly width: unknown;
      /** @example 128 */
      readonly height: unknown;
      /** @example LEHV6nWB2yk8pyo0adR*.7kCMdnj */
      readonly blurhash?: string;
    };
    /** User object */
    readonly User: components["schemas"]["BaseEntity"] & {
      /** @example Thomas A. Anderson */
      readonly name?: string;
      /**
       * @default test
       * @example The One
       */
      readonly description?: string;
      readonly icon?: components["schemas"]["Image"];
      /** @example America/Chicago */
      readonly timezone?: string;
      /**
       * Format: date-time
       * @example 2020-07-10 15:00:00.000
       */
      readonly last_online_at?: string;
    };
  };
}

export interface operations {
  readonly getContacts: {
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": readonly components["schemas"]["User"][];
        };
      };
    };
  };
  readonly getContactInfo: {
    readonly parameters: {
      readonly path: {
        readonly userUid: string;
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  readonly getContactIcon: {
    readonly parameters: {
      readonly path: {
        readonly userUid: string;
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["Image"];
        };
      };
    };
  };
  readonly getMyInfo: {
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  readonly getMyIcon: {
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["Image"];
        };
      };
    };
  };
  readonly deleteMyIcon: {
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
}

export interface external {}
