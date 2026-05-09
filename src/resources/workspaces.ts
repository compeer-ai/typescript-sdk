// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Workspaces extends APIResource {
  /**
   * Get all workspaces
   */
  list(options?: RequestOptions): APIPromise<WorkspaceListResponse> {
    return this._client.get('/workspaces', options);
  }
}

export type WorkspaceListResponse = Array<WorkspaceListResponse.WorkspaceListResponseItem>;

export namespace WorkspaceListResponse {
  export interface WorkspaceListResponseItem {
    id: string;

    name: string;
  }
}

export declare namespace Workspaces {
  export { type WorkspaceListResponse as WorkspaceListResponse };
}
