# Alive

Types:

- <code><a href="./src/resources/alive.ts">AliveCheckResponse</a></code>

Methods:

- <code title="get /alive">client.alive.<a href="./src/resources/alive.ts">check</a>() -> AliveCheckResponse</code>

# Stores

Types:

- <code><a href="./src/resources/stores.ts">StoreListResponse</a></code>

Methods:

- <code title="get /{workspace}/stores">client.stores.<a href="./src/resources/stores.ts">list</a>(workspace) -> StoreListResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchQueryResponse</a></code>

Methods:

- <code title="get /{workspace}/search">client.search.<a href="./src/resources/search.ts">query</a>(workspace, { ...params }) -> SearchQueryResponse</code>

# Workspaces

Types:

- <code><a href="./src/resources/workspaces.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /workspaces">client.workspaces.<a href="./src/resources/workspaces.ts">list</a>() -> WorkspaceListResponse</code>

# Capture

Types:

- <code><a href="./src/resources/capture.ts">CaptureCreateResponse</a></code>

Methods:

- <code title="post /{workspace}/capture">client.capture.<a href="./src/resources/capture.ts">create</a>(workspace, { ...params }) -> CaptureCreateResponse</code>
