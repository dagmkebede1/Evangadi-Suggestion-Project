import React, { useState } from "react";
import "./Home.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios'
function Home() {
  const [data, setdata] = useState([])
   let url = `http://localhost:3456/user/allNotifications`
  axios({
    method:"get",
    url,
  }).then((data)=>{
    setdata(data.data)
  }).catch((err)=>{
    console.log(err)
  })
  return (
    <div className="home_akafi container">
      <h1 className="text-center py-5 animate__heartBeat">
        Choose Where To Go ?
      </h1>
      <div className="d-md-flex justify-content-around">
        <div className="my-2">
          <a className="button1 btn" href="/uploadEquestions">
          <CloudUploadIcon/>  Upload correction
          </a>
        </div>
        <div className="my-2">
          <a className="button2 btn" href="/uploadSquestion">
          <DriveFolderUploadIcon/>  Upload Question From Students
          </a>
        </div>
        <div className="my-2">
          <a className="button3 btn" href="/admin">
            
          <RemoveRedEyeIcon/>  Admin View Section
          </a>
        </div>
      </div>
      <div className="d-md-flex">
      <div className="sideNote2 container  col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks </h1>
          <div className="shortText d-sm-block d-md-none">
              <p className="">No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps</p>
              <p className="">Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
          </div>
          <div className="d-none d-md-block">
            <p className="">No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps</p>
            <p className="">Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
          </div>
          <a href="https://www.evangadi.com/explained/" className="btn1">HOW IT WORKS</a>
        </div>
        <div className="sideNote2 container col-12 col-md-6 ms-md-2  mt-sm-5">
        <p className="forTitle my-2">Weekly</p>
          <h1 className="">Notifications </h1>   
          {
            data.map((singleData,i)=>{
              console.log(singleData)
              let singleDataShower = (
              <ul key={i}>
                <li>Notification To : {singleData.assigned_to}</li>
                <li>Notification: {singleData.message}</li>
              </ul>
              )
              return singleDataShower
            })
          }
        </div>
      </div>
     
    </div>
  );
}

export default Home;