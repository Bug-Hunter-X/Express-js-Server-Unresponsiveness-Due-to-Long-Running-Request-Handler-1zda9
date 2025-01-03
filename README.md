# Express.js Server Unresponsiveness Bug
This repository demonstrates a common issue in Express.js applications where a long-running request handler can cause the server to hang or become unresponsive.  The bug is caused by a synchronous `setTimeout` call in the route handler.  This blocks the event loop preventing other requests from being processed.

## Bug
The `bug.js` file contains an Express.js application with a route handler that simulates a long-running task using `setTimeout`. This blocks the main thread, leading to unresponsiveness.

## Solution
The `bugSolution.js` file demonstrates a solution using asynchronous operations with `async/await` and `Promise.all`. This prevents the main thread from blocking and enables the server to respond to other requests while the long-running task executes in the background.