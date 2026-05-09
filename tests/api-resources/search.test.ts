// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Compeer from 'compeer';

const client = new Compeer({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('getStores: only required params', async () => {
    const responsePromise = client.search.getStores('workspace', { query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getStores: required and optional params', async () => {
    const response = await client.search.getStores('workspace', { query: 'query', store: 'store' });
  });
});
