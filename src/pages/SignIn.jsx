import React, { useState, useRef, useEffect } from "react";
import { NavBar } from "../common/NavBar";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/SignIn.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

export const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log("Logging in with:", user, pwd);
    const res = await axios.get("https://states-c4c13-default-rtdb.firebaseio.com/users.json")
    // console.log(res.data)
    let userArr = Object.entries(res.data)
    console.log(userArr)
    userArr.map((usr) => {
      // console.log(usr)
      if(user === usr[1].username && pwd === usr[1].password) {
        console.log('=========== * valid user * ============')
        setSuccess(true);
      }
      else {
        setErrMsg("Wrong Username and Password")
      }
      console.log('username : ', usr[1].username, 'password : ', usr[1].password)
    })
  };

  return (
    <div id="signin">
      <NavBar />
      <section id="signin-container">
        {success ? (
          <div className="signin-box">
            <h1>Success</h1>
            <p>
              <Link to='/home'>Go to Home</Link>
            </p>
          </div>
        ) : (
          <div className="signin-box">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
              />

              <label htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                required
              />

              <button disabled={!user || !pwd}>Sign In</button>
            </form>
            <p>
              Need an account? <br />
              <span className="line">
                <Link to="/register">Register Here</Link>
              </span>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SignIn;
