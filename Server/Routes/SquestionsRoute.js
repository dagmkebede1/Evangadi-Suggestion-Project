import express from 'express';

import questionFromStudents from '../Controaller/SquestionsController.js';

import StudentImageParser from '../middlewares/StudentImageParser.js';

let forQueryPosting = express.Router();

forQueryPosting.post('/postQueryFromStudents',StudentImageParser,questionFromStudents)


export default forQueryPosting