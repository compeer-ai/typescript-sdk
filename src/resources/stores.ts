// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Stores extends APIResource {
  /**
   * Get a workspace's stores
   */
  list(workspace: string, options?: RequestOptions): APIPromise<StoreListResponse> {
    return this._client.get(path`/${workspace}/stores`, options);
  }
}

export interface StoreListResponse {
  id: string;

  description: string | null;

  name: string;

  workspaceId: string;
}

export declare namespace Stores {
  export { type StoreListResponse as StoreListResponse };
}
