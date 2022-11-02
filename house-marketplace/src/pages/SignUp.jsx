/**
 * // Register a User
 * Getting Auth value from getAuth
 * registering user with createUserWithEmailAndPassword
 * this returns a promise which we put into a userCredential object
 * then we get the user info with const user, which we'll need for the database
 * we use that user info to update the display name and then
 * redirect back to home page
 * 
 * // Save User to Firestore
 * copying everything in form data state (name, email password) and putting it in FormDataCopy
 * deleting password bc we don't want that in db
 * setting a timestamp to server timestamp
 * setDoc actually is what is going to update our user to our users collection
 * doc takes in the db which we imported, users table, and user.uid which is generated with user reg, along with the formdatacopy
 */


import { useState } from "react";
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,  
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')

    } catch(error) {
        toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Join our Community!</p>
        </header>

        <form onSubmit={onSubmit}>
        <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          
          
          
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/** Google OAuth */}

        <Link to='/sign-in' className='registerLink'>
            Sign In Instead
        </Link>
      </div>
    </>
  );
}



export default SignUp