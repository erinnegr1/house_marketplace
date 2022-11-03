import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
{/**on AuthStateChange will look for anytime there is a change */}

export const useAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)  //returns object with current value set to false
    

    useEffect(() => {
        if (isMounted) {
          const auth = getAuth()
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setLoggedIn(true)
            }
            setCheckingStatus(false)
          })
        }
    
        return () => {
          isMounted.current = false    //async promise call must use useRef to check unmounted components to help with memory leaks?
        }
      }, [isMounted])  //dependecy array
    
      return { loggedIn, checkingStatus }
    }


// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks