/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
  "/cats": {
    post: {
      responses: {
        200: {
          content: {
            "application/json": {
              id: string;
              name: string;
              colors:
                | string[]
                | {
                    id: string;
                    name: string;
                  }[];
            };
          };
        };
      };
    };
  };
};

export type components = {};

export type operations = {};

export type external = {};
