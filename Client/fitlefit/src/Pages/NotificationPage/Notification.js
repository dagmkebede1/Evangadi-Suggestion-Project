import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import staffNames from '../../StaffNames/StaffNames.js'
import './Notification.css'

function Notificaiton() {
  const [data, setdata] = useState([])
  const [response,setResponse] =useState();

  const [Data,setFormData] = useState({
    assigned_to:"",
    message:""
  });
  
  let server ="http://localhost:3456";
  let address = `${server}/user/notification`

  let  forSubmit = (e)=>{
    e.preventDefault()
    let fileUploader = {
        assigned_to : Data.assigned_to,
        message : Data.message
    }

    axios({
      method: "post",
      url:address,
      data: fileUploader,
    }).then((data)=>{
      setResponse(data.data)
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  } 

  let forInput =(e)=>{
    switch (e.target.name){
    case 'assigned_to' : setFormData((pre)=>{return{...pre,assigned_to:e.target.value}})
    break;
    case 'message' : setFormData((pre)=>{return{...pre,message:e.target.value}})
    break
    default:
      break
    }
  };

//  * for display notification 
async function getAllNotification(){
  let url = await `http://localhost:3456/user/allNotifications`
 axios({
   method:"get",
   url,
 }).then((data)=>{
   setdata(data.data)
  
 }).catch((err)=>{
   console.log(err)
 })
}

  getAllNotification();



//* For Delete 
  function toDelete(id) {
  let url = `http://localhost:3456/user/deleteNotification/${id}`
  fetch(url,{
    method:`DELETE`,
  })
}

    if(response){
      console.log(response)
      return <div className='forSuccessPage'>
                <h1 className='thankYou'>{response.forThanking}</h1>
                <a className='thankYouAnch' href="/notification">{response.forHomePageReturn}</a>
          </div>
    }else{
      return (
        
        <div className='notificationAkafi container'>
        <h3 className='mt-3 d-flex'> Send Notification and Task Assignment</h3>
         <form id="notifications" onSubmit={forSubmit} >
              <select  className="name_section" name="assigned_to" onChange={forInput}>
                    <option value="name not selected">please select name </option>
                    <option className="phaseThree" value="Aduga">{staffNames.staff1}</option>
                    <option className="phaseTwo" value="Aschalew">{staffNames.staff2}</option>
                    <option className="phaseOne" value="Bereket">{staffNames.staff3}</option>
                    <option className="phaseFour" value="Biruk">{staffNames.staff4}</option>
                    <option className="phaseOne" value="Daniel">{staffNames.staff5}</option>
                    <option className="phaseTwo" value="Edom">{staffNames.staff6}</option>
                    <option className="phaseThree" value="Eibrahim">{staffNames.staff7}</option>
                    <option className="phaseFour" value="Israel">{staffNames.staff8}</option>
                    <option className="phaseThree" value="Marew">{staffNames.staff9}</option>
                    <option className="phaseOne" value="Rediat">{staffNames.staff10}</option>
                    <option className="phaseTwo" value="Samson">{staffNames.staff11}</option>
                    <option className="phaseTwo" value="Saron">{staffNames.staff12}</option>
                    <option className="phaseThree" value="Seife">{staffNames.staff13}</option>
                    <option className="phaseFour" value="Tewedaj">{staffNames.staff14}</option>
                    <option value="For All">For All</option>
              </select>
              <textarea type="text" name='message'  placeholder='Your  Message on Task here' id='task' onChange={forInput} />
              <button type="submit" className='notificationSubmit'>send</button>
              </form>  


              <h3 className='d-block m-3 text-center bg-primary'>Previous Notifications</h3>
              {
              data.map((singleData,i)=>{
               
              let singleDataShower = (
                <div key={i} className='d-flex justify-content-around mb-1 bg-success'>
                <div className='border border-success col-md-3 m-2 p-1 text-center '>Notification To:{singleData.assigned_to}</div>
              <div>
                <div className='border border-success col-md-6 w-100 m-2 p-1 text-center'>Notification Message:{singleData.message}</div>
              </div>
                <button onClick={()=>toDelete(singleData.notification_id)} className='notificationSubmit'>Delete</button>
                <Link className="notificationSubmit" to={`/updateNotification/${singleData.notification_id}`}>Update</Link>
              </div>
             
              )
              return singleDataShower
            })
          }    
      
        </div>
      )
    }
}

export default Notificaiton