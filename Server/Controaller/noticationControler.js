import Econnection  from "../server.js";

let InsertNotification =(req,res)=>{
    const {assigned_to,message}=req.body
    let value = [assigned_to,message];
    let notificationAdder = `INSERT INTO notification(assigned_to,message) VALUES (?)`;

    Econnection.query(notificationAdder,[value],(err)=>{
         if(err){
            console.log(err)
            res.send('uploading notifications was not successful')
         }else{
            res.send({
                forThanking : `Uploaded successfully,Thank you!`,
                forHomePageReturn: `Click Here To Go Back To Notification Page`
            })
         }
    })
}

let deleteNotification = (req,res)=>{
      const  id = req.params.id
      let value = [id]

            let deleteNotification = `DELETE FROM notification Where notification_id = ${value}`;

            Econnection.query(deleteNotification,(err)=>{
                if(err){
                    console.log(err)
                    res.send('notification not deleted')
                }else{
                    res.send("notification deleted successfully")
                }
            })
}

let updateNotification = (req,res)=>{
        const {updated_assigned_to,updated_message}=req.body
        const id = req.params.id
        let value = [updated_assigned_to,updated_message,id]

                let updateNotification = `UPDATE  notification SET assigned_to = '${updated_assigned_to}',message= '${updated_message}' WHERE notification_id =${id}`;

                Econnection.query(updateNotification,(err)=>{
                    if(err){
                        console.log(err)
                   res.send('notification not updated')
                    }else{
                        res.send({
                            forThanking : `Notification updated successfully,Thank you!`,
                            forHomePageReturn: `Click Here To Go Back To Notification Page`
                        })
                    }
                })
}

 let getAllNotifications = (req,res)=>{
                let allDatafromNotification= "SELECT * FROM notification"

                Econnection.query(allDatafromNotification,[],(err,dataFromNotification)=>{
                    if(err){
                             console.log(err)
                    }else{
                            res.send(dataFromNotification);
                    }
                })
            }

            let checkListOfStaff = (req,res)=>{
                const {updated_statuscheck,id}=req.body
                console.log(`from axios ${updated_statuscheck}`)
                console.log(`ID ${id}`)
                        let updateStatuscheck = `UPDATE  forquery SET statuscheck = '${updated_statuscheck}' WHERE forQuery =${id}`;
                        Econnection.query(updateStatuscheck,(err)=>{
                            if(err){
                                console.log(err)
                        return  res.send('checklist not updated');
                            }else{
                              if(updated_statuscheck !== 1){
                        return       res.send({
                                    style : "undone",
                                    text :"In Progress...",
                                    checkMark : `${updated_statuscheck}`
                             })
                            }else{
                        return      res.send({
                                    style :"done",
                                    text :"Updated!",
                                    checkMark : `${updated_statuscheck}`

                             })
                            }
                        }})
            }   

            let deleteCheckListOfStaff = (req,res)=>{
                const  id = req.params.id
                let value = [id]
          
                      let deleteCheckListOfStaff = `DELETE FROM forquery WHERE forquery = ${value}`;
          
                      Econnection.query(deleteCheckListOfStaff,(err)=>{
                          if(err){
                              console.log(err)
                              res.send('notification not deleted')
                          }else{
                            res.send("notification deleted successfully")
                        }
                      })
            }
                
            let checkListOfStudent = (req,res)=>{
                const {updated_statuscheck,id}=req.body
                        let updateStatuscheck = `UPDATE  studentinfo SET statuscheck = '${updated_statuscheck}' WHERE question =${id}`
                        Econnection.query(updateStatuscheck,(err)=>{
                            if(err){
                                console.log(err)
                           res.send('notification not updated')
                            }else{
                                res.send({
                                    forThanking : `Notification updated successfully,Thank you!`,
                                    forHomePageReturn: `Click Here To Go Back To Notification Page`
                                })
                            }
                        })
            }  
            
            let deleteCheckListOfStudent = (req,res)=>{
                const  id = req.params.id
                let value = [id]
          
                      let deleteCheckListOfStudent = `DELETE FROM studentinfo Where question = ${value}`;
          
                      Econnection.query(deleteCheckListOfStudent,(err)=>{
                          if(err){
                              console.log(err)
                              res.send('notification not deleted')
                          }else{
                            res.send("notification deleted successfully")
                        }
                      })
            }


export {deleteNotification,InsertNotification,updateNotification,getAllNotifications,checkListOfStaff,checkListOfStudent,deleteCheckListOfStaff,deleteCheckListOfStudent}
