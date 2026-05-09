// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Alive extends APIResource {
  /**
   * Get a workspace's stores
   */
  check(options?: RequestOptions): APIPromise<AliveCheckResponse> {
    return this._client.get('/alive', options);
  }
}

export interface AliveCheckResponse {
  id: string;

  description: string | null;

  name: string;

  workspaceId: string;
}

export declare namespace Alive {
  export { type AliveCheckResponse as AliveCheckResponse };
}
