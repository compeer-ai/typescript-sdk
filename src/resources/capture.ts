// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Capture extends APIResource {
  /**
   * Create a capture
   */
  create(
    workspace: string,
    body: CaptureCreateParams,
    options?: RequestOptions,
  ): APIPromise<CaptureCreateResponse> {
    return this._client.post(path`/${workspace}/capture`, { body, ...options });
  }
}

export interface CaptureCreateResponse {
  success: true;
}

export interface CaptureCreateParams {
  content: string;

  store: string;

  type: 'text' | 'data' | 'url';
}

export declare namespace Capture {
  export {
    type CaptureCreateResponse as CaptureCreateResponse,
    type CaptureCreateParams as CaptureCreateParams,
  };
}
