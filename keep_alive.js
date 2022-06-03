const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('FD BOT IS NOW WATCHING'));

app.listen(port, () => console.log(`FDDOT IS NOW WATCHING to http://localhost:${port}`));