// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Barque } from '../client';

export abstract class APIResource {
  protected _client: Barque;

  constructor(client: Barque) {
    this._client = client;
  }
}
