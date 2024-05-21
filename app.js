const express = require('express');
const app = express();
const port = 8080;

app.get('/health_check', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
