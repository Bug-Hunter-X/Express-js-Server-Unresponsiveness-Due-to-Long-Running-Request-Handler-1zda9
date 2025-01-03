const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 5000)), // Simulate a long-running task
    ]);
    res.send('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});