import express from 'express';
import Econnection from "../server.js";

  let allFromStudent = (req,res,next)=>{
    let allDatafromStudent = "SELECT * FROM studentinfo"

    Econnection.query(allDatafromStudent,[],(err,dataFromStudent)=>{
          if(err){
                throw err
          }else{
                res.send(dataFromStudent);
          }
    })
}

export default allFromStudent




