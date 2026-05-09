// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Search extends APIResource {
  /**
   * Get a workspace's stores
   */
  query(
    workspace: string,
    query: SearchQueryParams,
    options?: RequestOptions,
  ): APIPromise<SearchQueryResponse> {
    return this._client.get(path`/${workspace}/search`, { query, ...options });
  }
}

export interface SearchQueryResponse {
  captureId: string;

  content: string;
}

export interface SearchQueryParams {
  query: string;

  store?: string;
}

export declare namespace Search {
  export { type SearchQueryResponse as SearchQueryResponse, type SearchQueryParams as SearchQueryParams };
}
