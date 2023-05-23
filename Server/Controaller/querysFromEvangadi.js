import Econnection  from "../server.js";
import nodemailer from 'nodemailer'
let postInfo = (req,res)=>{
    if(req.file){
        let imagePath = req.file.filename;
        
        const {forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction} = req.body;
        
        let values = [forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,imagePath,0];
        
        let contentAdder = `INSERT INTO forquery(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction,screenshot1,statuscheck) VALUES (?)`;
        
        Econnection.query(contentAdder,[values],(err)=>{
        
           if(err){
                res.send("uploading the information was not successful, please follow the instruction. Thank You!")
            }else{
                function sendEmail  (){
  
                    let mailSender  = nodemailer.createTransport({
                        service:"gmail",
                        port:465,
                        auth:{
                            user:"red.terefe@gmail.com",
                            pass :"kiuokihsnksqfukx"
                        }
                    });
                    
                    let details ={
                        from :"red.terefe@gmail.com",
                        to : "rediatandualeme@gmail.com",
                        subject:"correction notice!",
                        text:`New Update Request Was Uploaded By "${forwarded_from}" : The Request Is On "${phase}'s" Document Titled "${title_of_the_course}"
                        Please Respond To The Request. Thank You!`
                    };
                    
                    mailSender.sendMail(details,(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("email sent")
                        }
                    })
                    }
                    sendEmail()
                res.send({
                    forThanking : `Uploaded successfully,Thank you!`,
                    forHomePageReturn: `Click Here To Go Back To Home Page`
                })
                console.log("1 record inserted");
            };
        })
    }
}

export default postInfo;




