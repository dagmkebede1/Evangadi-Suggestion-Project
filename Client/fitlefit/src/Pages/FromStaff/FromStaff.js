import React, { useState } from "react";
import "./ForStaff.css";
import axios from 'axios';
import staffNames from "../../StaffNames/StaffNames.js";
function FromStuff() {
let server = "http://localhost:3456";
let url = `${server}/user/postQuery`;

const [response, setResponce] = useState();

const [formData, setFormData] = useState({
  forwarded_from :"",
  phase:"",
  title_of_the_course:"",
  correction_is_on :"",
  note_on_correction:"",
  screenshot1:""
});

let submitHandler = (e)=>{
  e.preventDefault();
  let fd = new FormData();
  fd.append('forwarded_from',formData.forwarded_from)
  fd.append('title_of_the_course',formData.title_of_the_course)
  fd.append('phase',formData.phase)
  fd.append('correction_is_on',formData.correction_is_on)
  fd.append('note_on_correction',formData.note_on_correction)
  fd.append('screenshot1',formData.screenshot1)

  axios({
    method: "post",
    url,
    data: fd,
    headers: {"Content-Type": "multipart/form-data" },
  }).then((data)=>{
    setResponce(data.data)
  }).catch((err)=>{
    console.log(err)
  })
}

let inputHandler = (e)=>{
  switch (e.target.name) {
    case "forwarded_from": setFormData((pre)=>{return {...pre,forwarded_from:e.target.value}})
      break;
    case "phase": setFormData((pre)=>{return {...pre,phase:e.target.value}});
      break;
    case "title_of_the_course": setFormData((pre)=>{return {...pre,title_of_the_course:e.target.value}});
      break;
    case "correction_is_on": setFormData((pre)=>{return {...pre,correction_is_on:e.target.value}});
      break;
    case "note_on_correction": setFormData((pre)=>{return {...pre,note_on_correction:e.target.value}});
      break;
    case "screenshot1": setFormData((pre)=>{return {...pre,screenshot1:  e.target.files[0]}});
      break;
    default:
      break;
  }
};

if(response){
  // return  [<h1 className="">{response.forThanking}</h1>,<a href="">{response.forHomePageReturn}</a>]
  return <div className="forSuccessPage">
              <h1 className="thankYou">{response.forThanking}</h1>
              <a className="thankYouAnch" href="/home">{response.forHomePageReturn}</a>
         </div>
}else{

return (
<div className="staffAkafiMother container py-2 my-2 ">
      <div className="d-sm-row d-md-flex  staffAkafi">
      {/* action="http://localhost:3456/user/postQuery" method="POST" */}
        <form onSubmit={submitHandler} >
          <h3 className="heading py-5 ">
            For Comments To Be Forwarded From staffs For Content Correction
          </h3>
          <div className="d-sm-row d-md-flex my-2">
          <div>
            <div>
            <label className="titles" htmlFor="Name">Forwarded By </label>
            </div>
            <select  className="name_section" name="forwarded_from" onChange={inputHandler}>
            <option  value="name not selected">please select your name </option>
            <option className="phaseThree" value="Aduga">{staffNames.staff1}</option>
            <option className="phaseTwo" value="Aschalew">{staffNames.staff2}</option>
                <option className="phaseOne" value="Aschalew">{staffNames.staff3}</option>
                <option className="phaseFour" value="Biruk">{staffNames.staff4}</option>
                <option className="phaseOne" value="Daniel">{staffNames.staff5}</option>
                <option className="phaseTwo" value="Edom">{staffNames.staff6}</option>
                <option className="phaseThree" value="Eibrahim">{staffNames.staff7}</option>
                <option className="phaseFour" value="Israel">{staffNames.staff8}</option>
                <option className="phaseThree" value="Israel">{staffNames.staff9}</option>
                <option className="phaseOne" value="Rediat">{staffNames.staff10}</option>
                <option className="phaseTwo" value="Rediat">{staffNames.staff11}</option>
                <option className="phaseTwo" value="Saron">{staffNames.staff12}</option>
                <option className="phaseThree" value="Seife">{staffNames.staff13}</option>
                <option className="phaseFour" value="Tewedaj">{staffNames.staff14}</option>
            </select>
          </div>
          <div>
          <div>
            <label className="titles" htmlFor="Name">Session </label>
            </div>
            <select className="name_section" name="phase" id="" onChange={inputHandler}>
            <option value="phase not selected">Please Select The Phase</option>
              <option className="phaseThree" value="Technical assistant session">
                Technical assistant session
              </option>
              <option className="phaseOne" value="Phase One">
                Phase One
              </option>
              <option className="phaseTwo" value="Phase two">
                Phase two
              </option>
              <option className="phaseThree" value="Phase three">
                Phase three
              </option>
            </select>
          </div>
          <div>
          <div>
            <label className="titles" htmlFor="Name">Course And Phase</label>
            </div>
            <select className="name_section" name="title_of_the_course" id="" onChange={inputHandler}>
             <option value="course title not selected">Please Select Course Title</option>
              <option className="phaseOne" value="Basic computer skills">
                Basic computer skills
              </option>
              <option className="phaseOne" value="Basics of HTML">
                Basics of HTML
              </option>
              <option className="phaseOne" value="CSS-Cascading style sheet">
                CSS-Cascading style sheet
              </option>
              <option className="phaseOne" value="Bootstrap">
                Bootstrap
              </option>
              <option className="phaseOne" value="Media Query">
                Media Query
              </option>
              <option className="phaseOne" value="Deployment">
                Deployment
              </option>

              <option className="phaseTwo" value="Introduction To JavaScript">
                Introduction To JavaScript
              </option>
              <option className="phaseTwo" value="">
                Functions and methods
              </option>
              <option
                className="phaseTwo"
                value="Conditional Statement And Decision Loops"
              >
                Conditional Statement And Decision Loops
              </option>
              <option className="phaseTwo" value="Javascript Objects">
                Javascript Objects
              </option>
              <option className="phaseTwo" value="jQuery">
                DOM manipulation
              </option>
              <option className="phaseTwo" value="jQuery">
                Javascript Events
              </option>
              <option className="phaseTwo" value="jQuery">
                jQuery
              </option>

              <option className="phaseThree" value="Bash Script And Git">
                Bash Script And Git
              </option>
              <option className="phaseThree" value="Introduction To Node">
                Introduction To Node
              </option>
              <option
                className="phaseThree"
                value="Introduction To Node Modules"
              >
                Introduction To Node Modules
              </option>
              <option className="phaseThree" value="Web Servers">
                Web Servers
              </option>
              <option className="phaseThree" value="Databases MySql">
                Databases MySql
              </option>
              <option className="phaseThree" value="Introduction To React">
                Introduction To React
              </option>
              <option
                className="phaseThree"
                value="React-Functional Components"
              >
                React-Functional Components
              </option>
              <option className="phaseThree" value="Asynchronous JavaScript">
                Asynchronous JavaScript
              </option>
              <option
                className="phaseThree"
                value="React-Class Based Components"
              >
                React-Class Based Components
              </option>
              <option className="phaseThree" value="React State">
                React State
              </option>
              <option className="phaseThree" value="React Hooks">
                React Hooks
              </option>
              <option
                className="phaseThree"
                value="Basic Computer Skills Updated"
              >
                Basic Computer Skills Updated
              </option>
              <option value="Basics of HTML Updated">
                Basics of HTML Updated
              </option>
            </select>
          </div>
          <div>
          <div>
            <label className="titles" htmlFor="Name">Material Type </label>
            </div>
            <select className="name_section" name="correction_is_on" id="" onChange={inputHandler}>
            <option value="material type not selected">Please Select The Material Type</option>
              <option className="phaseOne"  value="Notes of Teaching Material ">Notes of Teaching Material </option>
              <option className="phaseTwo"  value="video of Teaching Material">video of Teaching Material </option>
              <option className="phaseThree" value="Practice Questions">Practice Questions</option>
              <option className="phaseOne" value="Check list">Check list</option>
              <option className="phaseTwo" value="To Do List">To Do List</option>
              <option className="phaseThree"  value="Reference materials and Videos">Reference materials and Videos</option>
              <option className="phaseTwo" value="Shared Document">Shared Document</option>
            </select>
          </div>
          </div>
          <div>
            <textarea
              type="text"
              maxLength="1000"
              name="note_on_correction"
              placeholder="your comment here"
              onChange={inputHandler}
              required
            />
          </div>
          <div className="labelAkafi">
          <label className="label" htmlFor="fileUpload">Upload Picture</label>
          <h6>Picture Upload Is Mandatory!!</h6>
          <input
              onChange={inputHandler}
                id="fileUpload"
                name="screenshot1"
                type="file"
                accept="image/png"
                required
              />
          </div>
          <div className="">
            <button className="btnStaff" type="submit">Submit</button>
          </div>
         <div>
         <a className="anchoreForHome " href="/home">Back To Home Page</a>
         </div>
          
        </form>
      </div>
    </div>
  );
}
}

export default FromStuff;
