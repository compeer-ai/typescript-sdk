// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Backup extends APIResource {
  /**
   * Get a workspace's stores
   */
  retrieve(options?: RequestOptions): APIPromise<BackupRetrieveResponse> {
    return this._client.get('/backup', options);
  }
}

export interface BackupRetrieveResponse {
  id: string;

  description: string | null;

  name: string;

  workspaceId: string;
}

export declare namespace Backup {
  export { type BackupRetrieveResponse as BackupRetrieveResponse };
}
