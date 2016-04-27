import express from 'express';
import dbConnect from './config/db';
import expressConfig from './config/express';
import routesConfig from './config/routes';

const app = express();

dbConnect();

expressConfig(app);

routesConfig(app);

app.listen(app.get('port'));

console.log('-------------------------------');
console.log('===>  Starting Server . . .');
console.log(`===>  Listening on port: ${app.get('port')}`);
console.log('-------------------------------');
