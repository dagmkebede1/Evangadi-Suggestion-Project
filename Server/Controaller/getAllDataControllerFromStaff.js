import Econnection from '../server.js'

let allFromStaff = (req,res)=>{
      
    let allDatafromStaff = "SELECT * FROM forquery"

    Econnection.query(allDatafromStaff,[],(err,dataFromStaff)=>{
          if(err){
                throw err
          }else{
                res.send(dataFromStaff);
          }
    })
}

export default allFromStaff