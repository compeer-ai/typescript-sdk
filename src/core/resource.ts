// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Compeer } from '../client';

export abstract class APIResource {
  protected _client: Compeer;

  constructor(client: Compeer) {
    this._client = client;
  }
}
