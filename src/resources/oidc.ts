// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Oidc extends APIResource {
  /**
   * Get a workspace's stores
   */
  retrieve(options?: RequestOptions): APIPromise<OidcRetrieveResponse> {
    return this._client.get('/oidc', options);
  }
}

export interface OidcRetrieveResponse {
  id: string;

  description: string | null;

  name: string;

  workspaceId: string;
}

export declare namespace Oidc {
  export { type OidcRetrieveResponse as OidcRetrieveResponse };
}
