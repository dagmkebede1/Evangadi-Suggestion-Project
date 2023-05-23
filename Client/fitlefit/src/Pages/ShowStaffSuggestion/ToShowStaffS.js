import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./ToShowStaff.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ToShowStaffS() {

  const [staff, setStaff] = useState([]);

  const [done, setDone] = useState(true);

  let urlForStaff = "http://localhost:3456/user/getStaffData";
  
  const dataFromStaffes = async () => {
    try {
      const responceForStaff = await axios.get(urlForStaff);

      let convertedForStaff = JSON.parse(JSON.stringify(responceForStaff.data));

      setStaff(()=>convertedForStaff);
    } catch (err) {
      console.log({ "its error": err });
    }
  };
  useEffect(()=>{
    dataFromStaffes()
    },[])
  //* responce from backend
  let backEndData={
    style:"",
    text:"",
    checkMark:0
  }
  // * delete notification for admin 
  function forDeletingUsingChecklist(id) {

    // *put confirming alert

    let url = `http://localhost:3456/user/deleteCheckListOfStaff/${id}`
    fetch(url,{
      method:`DELETE`,
    })
    done === true ? setDone(false) : setDone(true);
  }
  // * progress showing
  let  setProgress = async (e,passedId)=>{
    e.preventDefault();
    let getAddress = await `http://localhost:3456/user/updateStatuscheckFromStaff`;

    staff.map((singleData)=>{
     let idInDb = singleData.forQuery
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
    dataFromStaffes();
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
    <div className="toShowStaffForward">
{/* ------------------------------------------------------- */}
<TableContainer className="toShowStaffForward m-2" component={Paper}>
      <h1 className="TitleFromStaff">List Of Information Forwarded From Staffs</h1>
    
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="background">
          <TableRow className="background">
            <StyledTableCell className="border" align="center">Forwarded From</StyledTableCell>
            <StyledTableCell align="center">Phase</StyledTableCell>
            <StyledTableCell className="border" align="center">Title of the course</StyledTableCell>
            <StyledTableCell align="center">Correction on</StyledTableCell>
            <StyledTableCell className="border" align="center">Passed note on correction</StyledTableCell>
            <StyledTableCell align="center"> passed Screenshot</StyledTableCell>
            <StyledTableCell  align="center">Hover On Image For Zooming</StyledTableCell>
          </TableRow>
        </TableHead>
        {staff.map((data,j) => {
      let staffDataDisplay = (
        <TableBody className="" key={j}>
            <StyledTableRow >
              <StyledTableCell className="border" align="center">{data.forwarded_from}</StyledTableCell>
              <StyledTableCell align="center">{data.phase}</StyledTableCell>
              <StyledTableCell className="border" align="center">{data.title_of_the_course}</StyledTableCell>
              <StyledTableCell align="right">{data.correction_is_on}</StyledTableCell>
              <StyledTableCell className="border"  align="center">{data.note_on_correction}</StyledTableCell>
              <StyledTableCell   align="center">{data.screenshoot2}</StyledTableCell>
              <StyledTableCell   align="center">
              <img className="passedImage"  src={`http://localhost:3456/${data.screenshot1}`} alt="screenShot" />
              </StyledTableCell>
            </StyledTableRow>
              <StyledTableCell  className="d-flex ">
                <button className='btn_toShowStaff m-2' onClick={(e)=>setProgress(e,data.forQuery)} style={{backgroundColor : data.statuscheck===1? "green" : "red"}}>{data.statuscheck===1 ? "Done": "In Progress"}</button>

                <button onClick={()=>forDeletingUsingChecklist(data.forQuery)} className='btn_toShowStaff m-2'>Delete</button>
              </StyledTableCell>
        </TableBody>
      )
      return staffDataDisplay;
    })}
      </Table>
    </TableContainer>
    </div>
  );
}

export default ToShowStaffS;


