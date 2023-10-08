const express = require('express');
const zooRouter = require('./routes/zoo-router.js');

const PORT = process.env.PORT || 8000;

const app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('build'));
app.use(express.json());

/** ---------- ROUTES ---------- **/
app.use('/zoo', zooRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
