/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/contacts": {
    get: operations["getContacts"];
  };
  "/contacts/{userUid}": {
    get: operations["getContactInfo"];
  };
  "/contacts/{userUid}/icon": {
    get: operations["getContactIcon"];
  };
  "/contacts/me": {
    get: operations["getMyInfo"];
  };
  "/contacts/me/icon": {
    get: operations["getMyIcon"];
    delete: operations["deleteMyIcon"];
  };
}

export interface components {
  schemas: {
    /** Parent of most important objects */
    BaseEntity: {
      /**
       * Format: nanoid
       * @deprecated
       * @description Test description with deprecated
       * @example njbusD52k6YoRG346tPgD
       */
      uid?: string;
      /**
       * Format: date-time
       * @description It's date example
       * @example 1999-03-31 15:00:00.000
       */
      created_at?: string;
      /**
       * Format: date-time
       * @example 2020-07-10 10:10:00.000
       */
      updated_at?: string;
      /** @example false */
      deleted?: boolean;
    };
    /** Image for preview */
    Image: {
      /** @example https://shantichat.com/data/V1StGXR8_Z5jdHi6B-myT/white-rabbit.png */
      url: string;
      /** @example 128 */
      width: unknown;
      /** @example 128 */
      height: unknown;
      /** @example LEHV6nWB2yk8pyo0adR*.7kCMdnj */
      blurhash?: string;
    };
    /** User object */
    User: components["schemas"]["BaseEntity"] & {
      /** @example Thomas A. Anderson */
      name?: string;
      /**
       * @default test
       * @example The One
       */
      description?: string;
      icon?: components["schemas"]["Image"];
      /** @example America/Chicago */
      timezone?: string;
      /**
       * Format: date-time
       * @example 2020-07-10 15:00:00.000
       */
      last_online_at?: string;
    };
  };
}

export interface operations {
  getContacts: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
    };
  };
  getContactInfo: {
    parameters: {
      path: {
        userUid: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  getContactIcon: {
    parameters: {
      path: {
        userUid: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Image"];
        };
      };
    };
  };
  getMyInfo: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  getMyIcon: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["Image"];
        };
      };
    };
  };
  deleteMyIcon: {
    responses: {
      /** OK */
      200: unknown;
    };
  };
}

export interface external {}
