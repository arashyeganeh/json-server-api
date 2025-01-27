const path = require('path');
const polka = require('polka');
const logger = require('./module/logger');
const serveStatic = require('serve-static');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const publicDir = path.join(__dirname, 'public');

const serve = serveStatic(publicDir, { index: ['index.html'] });
const app = polka();

function handleLog(req, res, next) {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
}

function handleHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
}

app.use(handleLog);
app.use(handleHeaders);
app.use(serve);

app.get('/', (req, res) => {
  res.sendFile(publicDir + '/index.html');
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify());
});

app.listen(PORT, () => {
  console.log(`> Running on localhost:${PORT}`);
});
