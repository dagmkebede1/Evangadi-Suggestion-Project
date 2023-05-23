import express from 'express';
import creator from '../Controaller/createor.js'
let createRoute = express.Router();


createRoute.get('/createTable',creator)

export default createRoute;