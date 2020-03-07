import express from 'express';
import http, { createServer } from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = createServer(app);

//middleware



// API routes
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Started on Port ${app.server.address().port}`);

export default app;





