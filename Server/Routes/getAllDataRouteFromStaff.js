import express from 'express'
import getAllData from '../Controaller/getAllDataControllerFromStaff.js'

let allDataRouteStaff = express.Router();



allDataRouteStaff.get('/getStaffData',getAllData)


export default allDataRouteStaff