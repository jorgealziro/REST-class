import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import app from '..';

let router = express();

// Connecting to the db
initializeDb( db => {
    // internal middleware
    router.use(middleware({config, db}));

    // API routes

});

export default router;