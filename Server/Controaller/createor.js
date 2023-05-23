import Econnection from '../server.js';
import tableFromEvangadi from '../Schema/db.js'
import tableFromStudents from '../Schema/db2.js'
import userInfo from '../Schema/userInfo.js';
import notification from '../Schema/notification.js';

let tableCreator = (req,res)=>{
    Econnection.query(tableFromEvangadi,(err)=>{
        if(err){
            console.log(err)
        }
    })
    Econnection.query(tableFromStudents,(err)=>{
        if(err){
            console.log(err)
        }
    })
    Econnection.query(userInfo,(err)=>{
        if(err){
            console.log(err)
        }
    })
    Econnection.query(notification,(err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send("all tables created")
}

export default tableCreator;