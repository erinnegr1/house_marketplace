
import { useState } from 'react'
//import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
//import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'


function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
    const { email, password } = formData
  
    const navigate = useNavigate()
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }
    
    return (
        <>
          <div className='pageContainer'>
            <header>
              <p className='pageHeader'>Welcome Back!</p>
            </header>
    
            <form>
                <input type="email" className="emailInput" placeholder="Email"
                id="email" value={email} />
            </form>
          </div>
        </>
      )
    }
    
    export default SignIn