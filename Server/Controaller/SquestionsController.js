import Econnection  from "../server.js";
import nodemailer from 'nodemailer'
let postInfo = (req,res)=>{

    if(req.file){

        let imagePath2= req.file.filename

        const {sNote_on_correction,sCorrection_is_on,sTitle_of_the_course,sPhase,sForwarded_from} = req.body

        let value = [sForwarded_from,sPhase,sTitle_of_the_course,sCorrection_is_on,sNote_on_correction,imagePath2,0];

        let adderToStudentTable = `INSERT INTO studentinfo(sforwarded_from,sphase,stitle_of_the_course,scorrection_is_on,snote_on_correction,screenshot2,statuscheck) VALUES (?)`;

        Econnection.query(adderToStudentTable,[value],(err)=>{

            if(err){
                console.log(err)
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
                        text:`New Update Request Was Uploaded By "${sForwarded_from}" : The Request Is On " ${sPhase}'s " Document Titled  "${sTitle_of_the_course}"
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
                console.log("1 record inserted")
                res.send({
                    forThankingStudent : `Uploaded successfully,Thank you!`,
                    forHomePageReturnStudent: `Click Here To Go Back To Home Page`
                })
            }
        })

    }
}

export default postInfo;




