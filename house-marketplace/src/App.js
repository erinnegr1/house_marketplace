
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Navbar, 
  Explore, 
  ForgotPassword, 
  Offers, 
  Profile, 
  SignIn, 
  SignUp, 
  PrivateRoute,
 } from './pages/index'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Explore />}/>
        <Route path='/forgot-password' element={ <ForgotPassword />}/>
        <Route path='/offers' element={ <Offers />}/>
        <Route path='/sign-in' element={ <SignIn/>}/>
        <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        <Route path='/sign-up' element={ <SignUp />}/>
      </Routes>
       <Navbar />
    </Router>

    <ToastContainer />
   
    </>
  );
}

export default App;
