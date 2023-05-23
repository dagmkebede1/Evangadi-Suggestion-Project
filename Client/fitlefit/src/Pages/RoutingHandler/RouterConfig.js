import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import FromStudent from "../../Pages/FromStudent/fromStudents.js";
import FromStuff from "../../Pages/FromStaff/FromStaff.js";
import Error from "../../Pages/Error.js";
import Admin from '../../Pages/ForAdmin/ToAdmin.js'
import Answer from '../../Pages/Answer.js';
import ViewAnaser from '../../Pages/ViewAnswer.js';
import ToShowStaffS from '../../Pages/ShowStaffSuggestion/ToShowStaffS.js';
import ToShowStudentQ from '../../Pages/ShowStudentQuestion/ToShowStudentQ.js';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Notification from '../../Pages/NotificationPage/Notification.js';
import Home from '../../Pages/Home/Home.js';
import SignUp from '../../Pages/SignupPage/SignUp.js';
import Login from '../../Pages/LoginPage/Login.js'
import Update from '../../Pages/Update/Update.js'
 export const allRouteConfig = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      children: [
        {
          path: "home1",
          element:<Login/>,
        },
        {
          path: "home",
          element: <Login/>,
        },
        {
          path: "uploadSquestion",
          element: <FromStudent/>,
        },
        {
          path: "/admin",
          element: < Admin/>,
        },
       
        {
          path: "signup",
          element: <SignUp/>,
        },
       
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "answer",
          element: <Answer/>,
        },
        {
          path: "viewAnswer",
          element: <ViewAnaser/>,
        },
        {
          path: "showStaffSuggestion",
          element: <ToShowStaffS/>,
        },
        {
          path: "showStudentQuestions",
          element: <ToShowStudentQ/>,
        },
       
        {
          path: "updateNotification",
          element: <Update/>,
        },
       
        {
          path: "showStudentQuestions",
          element: <ToShowStudentQ/>,
        },
        {
          path: "updateNotification/:id",
          element: <Update/>,
        },
        {
          path: "Notification",
          element: <Notification/>,
        },
        {
          path: "*",   // changed it to not found
          element: <Error/>,
        },
       
      ],
    },
  ]);