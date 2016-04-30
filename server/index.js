const express = require('express');
const dbConnect = require('./config/db');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

const app = express();

dbConnect();

expressConfig(app);

routesConfig(app);

app.listen(app.get('port'));

console.log('-------------------------------');
console.log('===>  Starting Server . . .');
console.log(`===>  Listening on port: ${app.get('port')}`);
console.log('-------------------------------');
