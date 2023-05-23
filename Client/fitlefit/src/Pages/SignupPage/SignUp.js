import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./SignUp.css";
//to import icons
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

let server = "http://localhost:3456";
let url = `${server}/user/userInfo`;
const cookies = new Cookies()
const SignUp = () => {
  const [userData, setUserData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_name: "",
    user_email: "",
    user_password: "",
  });
  const [response, setresponse] = useState();
  // **********icon part *********
  const [type, setType] = useState("password");
  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listen for Password function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    let userFile = {
      user_first_name :userData.user_first_name,
      user_last_name:userData.user_last_name,
      user_name:userData.user_name,
      user_email:userData.user_email,
      user_password:userData.user_password,
    }

    axios({
      method: "post",
      url,
      data: userFile,
    })
      .then((data) => {
        setresponse(data.data);

     let token = data.data.token
     cookies.set("token", token, { 
      path: "/",
     expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ******************************
  let handleChange = (e) => {
    switch (e.target.name) {
      case "user_last_name":
        setUserData((pre) => {
          return { ...pre, user_last_name: e.target.value };
        });
        break;
      case "user_name":
        setUserData((pre) => {
          return { ...pre, user_name: e.target.value };
        });
        break;
      case "user_first_name":
        setUserData((pre) => {
          return { ...pre, user_first_name: e.target.value };
        });
        break;
      case "user_email":
        setUserData((pre) => {
          return { ...pre, user_email: e.target.value };
        });
        break;
      case "user_password":
        setUserData((pre) => {
          return { ...pre, user_password: e.target.value };
        });
        break;
      default:
        break;
    }
  };
  // ****************************
  if (response) {
    return (
      <div className="forSuccessPage">
        <h1 className="thankYou">{response.forThanking}</h1>
        <a className="thankYouAnch" href="/home">
          {response.forHomePageReturn}
        </a>
      </div>
    );
  } else {
    return (
      <div className="container-fluid sign_page">
        <div className="container d-md-flex mx-auto py-5 align-items-center">
          <div className="form_wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column">
            <p className="p11">Join the network</p>
            <p className="p22 lorem">
              Already have an account?
              <Link to="/login" className="a11">
                Sign in
              </Link>
            </p>
            <form onSubmit={formSubmitter}>
              <div className="FLname d-flex">
                <input
                required
                  className="in11 me-1"
                  autoComplete="new-password"
                  name="user_first_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />

                <input
                required
                  className="in11 ms-1"
                  name="user_last_name"
                  onChange={handleChange}
                  type="text"
                  autoComplete="new-password"
                  placeholder="Last Name"
                />
              </div>

              <input
              required
                className="in11"
                name="user_name"
                onChange={handleChange}
                autoComplete="new-password"
                type="text"
                placeholder="User Name"
              />
              <input
              required
                className="in11 mr-1"
                name="user_email"
                autoComplete="new-password"
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="user_password"
                autoComplete="new-password"
                type={type}
                placeholder="Password"
              />
              <input
              required
                className="in11"
                onChange={handleChange}
                name="Confirm_Password"
                autoComplete="new-password"
                type={type}
                placeholder="Confirm Password"
              />
              <span className="showHide">
                <Icon icon={icon} size={20} onClick={HandleIconChange} />
              </span>
              <button className="btnSign">Agree and Join</button>
            </form>
            <p className="mt-md-5 mt-sm-5 text-center texttag">
              I agree to the
              <Link to="" className="a22">
                privacy policy
              </Link>
              and
              <Link to="" className="a22">
                terms of serivice.
              </Link>
            </p>
            <Link to="/login" className="a33 text-center">
              Already have an account?
            </Link>
          </div>
          <div className="SignupNote container col-12 col-md-6 ms-md-2  mt-sm-5">
            <p className="forTitle">About</p>
            <h1>Evangadi Networks </h1>
            <p className="lorem">
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps
            </p>
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
            <button className="btn1">HOW IT WORKS</button>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
