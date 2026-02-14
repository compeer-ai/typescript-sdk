// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Captures extends APIResource {
  /**
   * Create a new text, data, or URL capture in a project
   */
  create(body: CaptureCreateParams, options?: RequestOptions): APIPromise<CaptureCreateResponse> {
    return this._client.post('/api/v1/capture', { body, ...options });
  }

  /**
   * Search for captures within a project using semantic search
   */
  search(query: CaptureSearchParams, options?: RequestOptions): APIPromise<CaptureSearchResponse> {
    return this._client.get('/api/v1/search', { query, ...options });
  }
}

export interface CaptureCreateResponse {
  success: unknown;
}

export type CaptureSearchResponse = Array<CaptureSearchResponse.CaptureSearchResponseItem>;

export namespace CaptureSearchResponse {
  export interface CaptureSearchResponseItem {
    captureId: string;

    content: string;

    percentageMatch: number;
  }
}

export interface CaptureCreateParams {
  content: string;

  projectId: string;

  type: 'text' | 'data' | 'url';
}

export interface CaptureSearchParams {
  projectId: string;

  query: string;
}

export declare namespace Captures {
  export {
    type CaptureCreateResponse as CaptureCreateResponse,
    type CaptureSearchResponse as CaptureSearchResponse,
    type CaptureCreateParams as CaptureCreateParams,
    type CaptureSearchParams as CaptureSearchParams,
  };
}
