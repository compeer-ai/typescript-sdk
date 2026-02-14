// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class V1 extends APIResource {
  /**
   * Create a new text, data, or URL capture in a project
   */
  createCapture(body: V1CreateCaptureParams, options?: RequestOptions): APIPromise<V1CreateCaptureResponse> {
    return this._client.post('/api/v1/capture', { body, ...options });
  }

  /**
   * Returns all projects belonging to the authenticated user
   */
  listProjects(options?: RequestOptions): APIPromise<V1ListProjectsResponse> {
    return this._client.get('/api/v1/projects', options);
  }

  /**
   * Auto-generated GET /openapi
   */
  retrieveOpenAPI(options?: RequestOptions): APIPromise<V1RetrieveOpenAPIResponse> {
    return this._client.get('/api/v1/openapi', options);
  }

  /**
   * Returns information about the currently authenticated user
   */
  retrieveUser(options?: RequestOptions): APIPromise<V1RetrieveUserResponse> {
    return this._client.get('/api/v1/user', options);
  }

  /**
   * Search for captures within a project using semantic search
   */
  searchCaptures(
    query: V1SearchCapturesParams,
    options?: RequestOptions,
  ): APIPromise<V1SearchCapturesResponse> {
    return this._client.get('/api/v1/search', { query, ...options });
  }
}

export interface V1CreateCaptureResponse {
  success: unknown;
}

export type V1ListProjectsResponse = Array<V1ListProjectsResponse.V1ListProjectsResponseItem>;

export namespace V1ListProjectsResponse {
  export interface V1ListProjectsResponseItem {
    id: string;

    name: string;

    userId: string;
  }
}

export interface V1RetrieveOpenAPIResponse {
  info: V1RetrieveOpenAPIResponse.Info;

  openapi: string;

  paths: V1RetrieveOpenAPIResponse.Paths;

  servers: Array<V1RetrieveOpenAPIResponse.Server>;

  tags: Array<V1RetrieveOpenAPIResponse.Tag>;
}

export namespace V1RetrieveOpenAPIResponse {
  export interface Info {
    description: string;

    title: string;

    version: string;
  }

  export interface Paths {
    '/api/v1/capture': Paths.APIV1Capture;

    '/api/v1/projects': Paths.APIV1Projects;

    '/api/v1/search': Paths.APIV1Search;

    '/api/v1/user': Paths.APIV1User;
  }

  export namespace Paths {
    export interface APIV1Capture {
      post: APIV1Capture.Post;
    }

    export namespace APIV1Capture {
      export interface Post {
        description: string;

        requestBody: Post.RequestBody;

        responses: Post.Responses;

        summary: string;

        tags: Array<string>;
      }

      export namespace Post {
        export interface RequestBody {
          content: RequestBody.Content;

          required: unknown;
        }

        export namespace RequestBody {
          export interface Content {
            'application/json': Content.ApplicationJson;
          }

          export namespace Content {
            export interface ApplicationJson {
              schema: ApplicationJson.Schema;
            }

            export namespace ApplicationJson {
              export interface Schema {
                properties: Schema.Properties;

                required: Array<string>;

                type: string;
              }

              export namespace Schema {
                export interface Properties {
                  content: Properties.Content;

                  projectId: Properties.ProjectID;

                  type: Properties.Type;
                }

                export namespace Properties {
                  export interface Content {
                    type: string;
                  }

                  export interface ProjectID {
                    type: string;
                  }

                  export interface Type {
                    enum: Array<string>;

                    type: string;
                  }
                }
              }
            }
          }
        }

        export interface Responses {
          default: Responses.Default;
        }

        export namespace Responses {
          export interface Default {
            content: Default.Content;

            description: string;
          }

          export namespace Default {
            export interface Content {
              'application/json': Content.ApplicationJson;
            }

            export namespace Content {
              export interface ApplicationJson {
                schema: ApplicationJson.Schema;
              }

              export namespace ApplicationJson {
                export interface Schema {
                  properties: Schema.Properties;

                  required: Array<string>;

                  type: string;
                }

                export namespace Schema {
                  export interface Properties {
                    success: Properties.Success;
                  }

                  export namespace Properties {
                    export interface Success {
                      oneOf: Array<unknown>;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    export interface APIV1Projects {
      get: APIV1Projects.Get;
    }

    export namespace APIV1Projects {
      export interface Get {
        description: string;

        responses: Get.Responses;

        summary: string;

        tags: Array<string>;
      }

      export namespace Get {
        export interface Responses {
          default: Responses.Default;
        }

        export namespace Responses {
          export interface Default {
            content: Default.Content;

            description: string;
          }

          export namespace Default {
            export interface Content {
              'application/json': Content.ApplicationJson;
            }

            export namespace Content {
              export interface ApplicationJson {
                schema: ApplicationJson.Schema;
              }

              export namespace ApplicationJson {
                export interface Schema {
                  items: Schema.Items;

                  type: string;
                }

                export namespace Schema {
                  export interface Items {
                    properties: Items.Properties;

                    required: Array<string>;

                    type: string;
                  }

                  export namespace Items {
                    export interface Properties {
                      id: unknown;

                      name: unknown;

                      userId: unknown;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    export interface APIV1Search {
      get: APIV1Search.Get;
    }

    export namespace APIV1Search {
      export interface Get {
        description: string;

        parameters: Array<Get.Parameter>;

        responses: Get.Responses;

        summary: string;

        tags: Array<string>;
      }

      export namespace Get {
        export interface Parameter {
          in: string;

          name: string;

          required: unknown;

          schema: Parameter.Schema;
        }

        export namespace Parameter {
          export interface Schema {
            type: string;
          }
        }

        export interface Responses {
          default: Responses.Default;
        }

        export namespace Responses {
          export interface Default {
            content: Default.Content;

            description: string;
          }

          export namespace Default {
            export interface Content {
              'application/json': Content.ApplicationJson;
            }

            export namespace Content {
              export interface ApplicationJson {
                schema: unknown;
              }
            }
          }
        }
      }
    }

    export interface APIV1User {
      get: APIV1User.Get;
    }

    export namespace APIV1User {
      export interface Get {
        description: string;

        responses: Get.Responses;

        summary: string;

        tags: Array<string>;
      }

      export namespace Get {
        export interface Responses {
          default: Responses.Default;
        }

        export namespace Responses {
          export interface Default {
            content: Default.Content;

            description: string;
          }

          export namespace Default {
            export interface Content {
              'application/json': Content.ApplicationJson;
            }

            export namespace Content {
              export interface ApplicationJson {
                schema: ApplicationJson.Schema;
              }

              export namespace ApplicationJson {
                export interface Schema {
                  properties: Schema.Properties;

                  required: Array<string>;

                  type: string;
                }

                export namespace Schema {
                  export interface Properties {
                    id: Properties.ID;

                    avatar: Properties.Avatar;

                    email: Properties.Email;

                    firstName: Properties.FirstName;

                    lastName: Properties.LastName;

                    name: Properties.Name;

                    theme: Properties.Theme;
                  }

                  export namespace Properties {
                    export interface ID {
                      type: string;
                    }

                    export interface Avatar {
                      type: string;
                    }

                    export interface Email {
                      type: string;
                    }

                    export interface FirstName {
                      type: string;
                    }

                    export interface LastName {
                      type: string;
                    }

                    export interface Name {
                      type: string;
                    }

                    export interface Theme {
                      oneOf: Array<unknown>;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  export interface Server {
    url: string;
  }

  export interface Tag {
    name: string;
  }
}

export interface V1RetrieveUserResponse {
  id: string;

  avatar: string;

  email: string;

  firstName: string;

  lastName: string;

  name: string;

  theme: string;
}

export type V1SearchCapturesResponse = Array<V1SearchCapturesResponse.V1SearchCapturesResponseItem>;

export namespace V1SearchCapturesResponse {
  export interface V1SearchCapturesResponseItem {
    captureId: string;

    content: string;

    percentageMatch: number;
  }
}

export interface V1CreateCaptureParams {
  content: string;

  projectId: string;

  type: 'text' | 'data' | 'url';
}

export interface V1SearchCapturesParams {
  projectId: string;

  query: string;
}

export declare namespace V1 {
  export {
    type V1CreateCaptureResponse as V1CreateCaptureResponse,
    type V1ListProjectsResponse as V1ListProjectsResponse,
    type V1RetrieveOpenAPIResponse as V1RetrieveOpenAPIResponse,
    type V1RetrieveUserResponse as V1RetrieveUserResponse,
    type V1SearchCapturesResponse as V1SearchCapturesResponse,
    type V1CreateCaptureParams as V1CreateCaptureParams,
    type V1SearchCapturesParams as V1SearchCapturesParams,
  };
}
