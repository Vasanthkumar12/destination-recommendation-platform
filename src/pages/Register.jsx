import React from 'react'
import { NavBar } from '../common/NavBar'
import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)
  
  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)
  
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false) 

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])
  
  const [formData, setFormData] = useState({username: "", password: ""})
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate inputs
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
  
    // Update state and ensure we use the latest values
    const updatedFormData = { username: user, password: pwd };
    setFormData(updatedFormData); 
  
    console.log("Updated Form Data = ", updatedFormData); // This will have correct values
  
    try {
      const res = await axios.post(
        "https://states-c4c13-default-rtdb.firebaseio.com/users.json", 
        JSON.stringify(updatedFormData),  // Convert to JSON string
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log(`Data submitted successfully...`, res.data);
    } catch (err) {
      console.log("Error submitting data:", err);
    }
  
    setSuccess(true)
  }

  return (
    <div id="register-component">
      <NavBar/>
      <section id="parent">
        { success ? (
            <div className='child'>
              <h1>Success</h1>
              <Link to="/signin">Sign In</Link>
            </div>
          ) : 
          (
            <div className='child'>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              <h1>Register</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                  Username:
                  <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />  
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"} >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input type="text" name='username' id='username' ref={userRef} autoComplete='off'
                    onChange={(e) => setUser(e.target.value)} required
                    aria-invalid={validName? 'false' : 'true'} aria-describedby='uidnote' 
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen" }>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.<br/>
                  Must begin with a letter.<br/>
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password">
                  Password:
                  <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input 
                  type="password" 
                  id="password"
                  name='password'
                  onChange={(e) => setPwd(e.target.value)}
                  required 
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby='pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"} >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letter, a number and a special characters<br />
                  Allowed special characters: 
                  <span aria-label="exclamation mark">#</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input 
                  type="password" 
                  id="confirm_pwd" 
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required 
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>

                <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
              </form>
              <p>Already registered? <br />
                <span className='line'>
                  <Link to='/signin'>Sign In</Link>
                </span>
              </p>
            </div>
          )
        }
      </section>
    </div>
  )
}
