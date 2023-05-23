import React, { useEffect, useState } from "react";
import "./ToShowStudent.css";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ToShowStudentQ() {
  const [student, setStudent] = useState([]);
  const [done, setDone] = useState(true);
  let urlForStudent = "http://localhost:3456/user/getStudentData";
  
  const dataFromStudent = async () => {
    try {
      const responceFromStudent= await axios.get(urlForStudent);

      let convertedForStudent = JSON.parse(JSON.stringify(responceFromStudent.data));
  

      setStudent(()=>convertedForStudent);
  
    } catch (err) {
      console.log({ "its error": err });
    }
  };

  useEffect(()=>{
    dataFromStudent()
    },[]);
  //* responce from backend
  let backEndData={
    style:"",
    text:"",
    checkMark:0
  } 
    // * delete notification for admin 
    function forDeletingUsingChecklist(id) {
      //* put confirmation text 
      let url = `http://localhost:3456/user/deleteCheckListOfStudent/${id}`
      fetch(url,{
        method:`DELETE`,
      })
      done === true ? setDone(false) : setDone(true);
    }
     // * progress showing
  let  setProgress = async (e,passedId)=>{
    e.preventDefault();
    let getAddress = await `http://localhost:3456/user/updateStatuscheckFromStudent`;

    student.map((singleData)=>{
     let idInDb = singleData.question
     let singleStatus =  singleData.statuscheck
 
      if(idInDb === passedId){
       
        if(singleStatus === 1){
          axios.post(getAddress,{
            updated_statuscheck:0,
              id:`${passedId}`
          }).then((response)=>{
            backEndData.text=response.data.text
            backEndData.style=response.data.style
            backEndData.checkMark=response.data.checkMark
           done === true ? setDone(false) : setDone(true);

          }).catch((err)=>{
              console.log(err)
          })
        }
         if(singleStatus=== 0)
        {
          axios.post(getAddress,{
              updated_statuscheck:1,
              id:`${passedId}`
          }).then((response)=>{
            backEndData.text=response.data.text
            backEndData.style=response.data.style
            backEndData.checkMark=response.data.checkMark
            done === true ? setDone(false) : setDone(true)
          })
        }
      }
    })
   }

   useEffect(() => {
    dataFromStudent();
  }, [done]);


// * Table section from material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



//  *end of material UI table 

  return (
    <div className="studentAkafiOne">
<TableContainer className="toShowStaffForward" component={Paper}>
      <h3 className="TitleFromStaff">List Of Information Forwarded From Staffs Regarding Students Questions</h3>
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="background">
          <TableRow className="background">
            <StyledTableCell className="border" align="right">Forwarded From</StyledTableCell>
            <StyledTableCell align="right">Phase</StyledTableCell>
            <StyledTableCell className="border" align="right">Title of the course</StyledTableCell>
            <StyledTableCell align="right">Question</StyledTableCell>
            <StyledTableCell className="border" align="right">Passed note on correction</StyledTableCell>
            <StyledTableCell align="center">Passed Screenshot</StyledTableCell>
            <StyledTableCell align="right">Hover On Image For Zooming</StyledTableCell>
            <StyledTableCell className="border" align="right">states</StyledTableCell>
          </TableRow>
        </TableHead>
        {student.map((data,i) => {
          console.log(data)
        let studentDataDisplay = (
      <TableBody key={i}>
            <StyledTableRow >
              <StyledTableCell className="border" align="center">{data.sforwarded_from}</StyledTableCell>
              <StyledTableCell align="center">{data.sphase}</StyledTableCell>
              <StyledTableCell className="border"  align="center">{data.stitle_of_the_course}</StyledTableCell>
              <StyledTableCell align="center">{data.scorrection_is_on}</StyledTableCell>
              <StyledTableCell className="border"  align="center">{data.snote_on_correction}</StyledTableCell>
              <StyledTableCell   align="center">{data.screenshoot1}</StyledTableCell>
              <img className="passedImage"  src={`http://localhost:3456/${data.screenshot2}`} alt="" />
            </StyledTableRow>
            <StyledTableCell  className="d-flex ">
                <button className='btn_toShowStaff m-2' onClick={(e)=>setProgress(e,data.question)} style={{backgroundColor : data.statuscheck===1? "green" : "red"}}>{data.statuscheck===1 ? "Done": "In Progress"}</button>
                <button onClick={()=>forDeletingUsingChecklist(data.question)} className='btn_toShowStaff m-2'>Delete</button>
              </StyledTableCell>           
        </TableBody>
)
return studentDataDisplay;
})}
</Table>
</TableContainer>
    </div>
  );
}

export default ToShowStudentQ;
