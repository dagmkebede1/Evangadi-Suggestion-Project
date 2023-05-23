import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import staffNames from '../../StaffNames/StaffNames.js'
import axios from 'axios';

function Update() {
  let {id}=useParams();
  const [response,setResponse] =useState();

  const [UpdateData, setUpdateData] = useState({
    updated_assigned_to :"",
    updated_message:"",
  })

  let forUpdateInput =(e)=>{
    switch (e.target.name){
    case 'updated_assigned_to' : setUpdateData((pre)=>{return{...pre,updated_assigned_to:e.target.value}})
    break;
    case 'updated_message' : setUpdateData((pre)=>{return{...pre,updated_message:e.target.value}})
    break
    default:
      break
    }
  };
function toUpdate (passe_id,e){
  e.preventDefault()
          let address =  `http://localhost:3456/user/updateNotification/${passe_id}`
            axios({
             method:"PATCH",
            url: address,
            data:{
              updated_assigned_to:UpdateData.updated_assigned_to,
              updated_message:UpdateData.updated_message,
          }
           }).then((data)=>{
             setResponse(data.data)
             console.log(data)
            
           }).catch(err=>console.log(err))
}

if(response){
  return <div className='forSuccessPage'>
            <h1 className='thankYou'>{response.forThanking}</h1>
            <a className='thankYouAnch' href="/notification">{response.forHomePageReturn}</a>
      </div>
}else{
  return (
    <div>
    <h3 className='text-center'>Update Notification</h3>
     <form onSubmit={(e)=>{toUpdate(id,e)}}>
               <select  className="name_section" name="updated_assigned_to" onChange={forUpdateInput} >
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
          <textarea type="text" name='updated_message'  placeholder='Your  Message on Task here' onChange={forUpdateInput} />
          <button className='notificationSubmit' type='submit'>Submit Update</button>
     </form> 
</div>
  )
}
}

export default Update