const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  '/api',
  express.static(path.join(__dirname, 'geojson'), {
    setHeaders: (res, _filePath) => res.setHeader('Content-Type', 'application/json'),
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
