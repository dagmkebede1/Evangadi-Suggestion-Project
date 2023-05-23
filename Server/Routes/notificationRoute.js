import express from 'express';


import {InsertNotification} from '../Controaller/noticationControler.js';
import {deleteNotification} from '../Controaller/noticationControler.js'
import {updateNotification} from '../Controaller/noticationControler.js'
import {getAllNotifications} from '../Controaller/noticationControler.js'
import {checkListOfStaff} from '../Controaller/noticationControler.js'
import {checkListOfStudent} from '../Controaller/noticationControler.js'
import {deleteCheckListOfStudent} from '../Controaller/noticationControler.js'
import {deleteCheckListOfStaff} from '../Controaller/noticationControler.js'

let notificationRoute = express.Router(); 

notificationRoute.post('/notification',InsertNotification)

notificationRoute.delete(`/deleteNotification/:id`,deleteNotification)

notificationRoute.patch('/updateNotification/:id',updateNotification)
notificationRoute.get('/allNotifications',getAllNotifications)
notificationRoute.post('/updateStatuscheckFromStaff',checkListOfStaff)
notificationRoute.post('/updateStatuscheckFromStudent',checkListOfStudent)
notificationRoute.delete('/deleteCheckListOfStaff/:id',deleteCheckListOfStaff)
notificationRoute.delete('/deleteCheckListOfStudent/:id',deleteCheckListOfStudent)

export default notificationRoute;