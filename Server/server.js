import mysql from "mysql2";
import express from "express";
import dotenv from 'dotenv';
import createRoute from './Routes/create.js'
import cors from 'cors';
import queryFromEvangadiToPost from './Routes/queryRoute.js'
import queryFromStudentToPost from './Routes/SquestionsRoute.js'
import allDataRouteStudent from './Routes/getAllDataRouteFromStudent.js'
import allDataRouteStaff from './Routes/getAllDataRouteFromStaff.js'
import registerInfo from "./Routes/registerRoute.js"
import InsertNotification from "./Routes/notificationRoute.js";
import toDeleteNotification from "./Routes/notificationRoute.js"
import updateNotification from "./Routes/notificationRoute.js"
import getAllNotifications from "./Routes/notificationRoute.js"
import checkListStaff from "./Routes/notificationRoute.js"
import checkListOfStudent from "./Routes/notificationRoute.js"
import deleteCheckListOfStudent from "./Routes/notificationRoute.js"
import deleteCheckListOfStaff from "./Routes/notificationRoute.js"
import cookieParser from "cookie-parser";
// * config for dotenv
dotenv.config();
// * initialize express benefits 
let app = express();
//* support middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
// * static for image
app.use(express.static("Public/ImageFromStaff/"))
app.use(express.static("Public/ImageFromStudent/"))
app.use(cors());
//* main routes
app.use('/user',createRoute)
app.use('/user',queryFromEvangadiToPost)
app.use('/user',queryFromStudentToPost)
app.use('/user',allDataRouteStudent)
app.use('/user',allDataRouteStaff)  
app.use('/user',registerInfo)
app.use('/user',InsertNotification)
app.use('/user',toDeleteNotification)
app.use('/user',updateNotification)
app.use('/user',getAllNotifications)
app.use('/user',checkListStaff)
app.use('/user',checkListOfStudent)
app.use('/user',deleteCheckListOfStudent)
app.use('/user',deleteCheckListOfStaff)

//* create connection info
let Econnection = mysql.createConnection({
    user:process.env.USER_NAME_FOR_DATABASE,
    password:process.env.PASSWORD_FOR_DATABASE,
    host:process.env.HOST_FOR_DATABASE,
    database:process.env.DATABASE_NAME
})

//* create connection
let connectionH = async ()=>{
    try{
    await Econnection.connect((err)=>{
        if(err){
            console.log("connection not successful")
        }else{
            console.log('connection successful');
            let port = process.env.PORT || 5000
            app.listen(port,()=>{
                console.log(`listening to port ${port}`)
            })
        }
    })
    }catch(err){
        console.log(`connection not successful error : ${err}`)
    }
}

connectionH()

export default Econnection;