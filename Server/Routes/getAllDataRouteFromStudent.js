import express from 'express'
import getAllData from '../Controaller/getAllDataControllerFromStudent.js'


let allDataRouteStudent = express.Router();



allDataRouteStudent.get('/getStudentData',getAllData)

export default allDataRouteStudent