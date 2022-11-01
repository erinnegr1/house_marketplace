
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar, Explore, ForgotPassword, Offers, Profile, SignIn, SignUp} from './pages/index'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Explore />}/>
        <Route path='/forgot-password' element={ <ForgotPassword />}/>
        <Route path='/offers' element={ <Offers />}/>
        <Route path='/sign-in' element={ <SignIn/>}/>
        <Route path='/profile' element={ <SignIn/>}/>
        <Route path='/sign-up' element={ <SignUp />}/>
      </Routes>
       <Navbar />
    </Router>
   
    </>
  );
}

export default App;
