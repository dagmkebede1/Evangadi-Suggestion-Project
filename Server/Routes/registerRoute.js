import express from 'express';
import postUserInfo from '../Controaller/rigesterController.js'


let userInput = express.Router()

userInput.post('/userInfo',postUserInfo)

export default userInput;