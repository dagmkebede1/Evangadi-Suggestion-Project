import React from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FromStudent from "./Pages/FromStudent/fromStudents.js";
import FromStuff from "./Pages/FromStaff/FromStaff.js";
import Error from "./Pages/Error.js";
import Admin from './Pages/ForAdmin/ToAdmin.js'
import Answer from './Pages/Answer.js';
import ViewAnaser from './Pages/ViewAnswer.js';
import ToShowStaffS from './Pages/ShowStaffSuggestion/ToShowStaffS.js';
import ToShowStudentQ from './Pages/ShowStudentQuestion/ToShowStudentQ.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Notification from './Pages/NotificationPage/Notification.js';
import Home from './Pages/Home/Home.js';
import SignUp from './Pages/SignupPage/SignUp.js';
import Login from './Pages/LoginPage/Login.js'
import Update from './Pages/Update/Update.js'


function App() {
  return (
    <div className='wanawAkafi'>
    <Router>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home1' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/uploadSquestion' element={<FromStudent/>}/>
        <Route exact path='/uploadEquestions' element={<FromStuff/>}/>
        <Route exact path='/admin' element={< Admin/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/answer' element={<Answer/>}/>
        <Route exact path='/viewAnswer' element={<ViewAnaser/>}/>
        <Route exact path='/showStaffSuggestion' element={<ToShowStaffS/>}/>
        <Route exact path='/showStudentQuestions' element={<ToShowStudentQ/> }/>
        <Route exact path='/updateNotification/:id' element={<Update/> }/>
        <Route exact path='/Notification' element={<Notification/> }/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
    </Router>
 <Footer/>   
    </div>
  );
}
export default App;
