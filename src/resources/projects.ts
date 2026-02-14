// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * Returns all projects belonging to the authenticated user
   */
  readAll(options?: RequestOptions): APIPromise<ProjectReadAllResponse> {
    return this._client.get('/api/v1/projects', options);
  }
}

export type ProjectReadAllResponse = Array<ProjectReadAllResponse.ProjectReadAllResponseItem>;

export namespace ProjectReadAllResponse {
  export interface ProjectReadAllResponseItem {
    id: string;

    name: string;

    userId: string;
  }
}

export declare namespace Projects {
  export { type ProjectReadAllResponse as ProjectReadAllResponse };
}
