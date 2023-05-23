import express from 'express';

import postInfo from '../Controaller/querysFromEvangadi.js';

import StaffImageParser from '../middlewares/StaffImageParser.js';

let forQueryPosting = express.Router();

forQueryPosting.post('/postQuery',StaffImageParser,postInfo)


export default forQueryPosting
