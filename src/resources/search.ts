// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Search extends APIResource {
  /**
   * Get a workspace's stores
   */
  getStores(
    workspace: string,
    query: SearchGetStoresParams,
    options?: RequestOptions,
  ): APIPromise<SearchGetStoresResponse> {
    return this._client.get(path`/${workspace}/search`, { query, ...options });
  }
}

export interface SearchGetStoresResponse {
  captureId: string;

  content: string;
}

export interface SearchGetStoresParams {
  query: string;

  store?: string;
}

export declare namespace Search {
  export {
    type SearchGetStoresResponse as SearchGetStoresResponse,
    type SearchGetStoresParams as SearchGetStoresParams,
  };
}
