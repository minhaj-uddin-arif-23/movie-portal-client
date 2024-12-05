import React, { createContext, useEffect,useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth'


import { getAuth, updateProfile } from "firebase/auth";
import auth from '../fireBase/firebase.config';
// google auth provider
const provider = new GoogleAuthProvider();

export const AuthContext = createContext()

export default function AuthProvider({children}) {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // sign out in user
  const logOut=() => {
    setLoading(true)
    signOut(auth)
  }
  // create user with email and password
  const createuser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // Log in user
  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // google login user 
  const googleSignIn = () => {
    return signInWithPopup(auth,provider)
  }

  //update profile
  const updateUser = (profile) => {
    return updateProfile(auth.currenUser,profile)
  }
  // password reset email
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth,email)
  }

  // send to another files route 
  const user_Information_Send = {
    user,setUser,logOut,createuser,googleSignIn,signIn,updateUser,passwordReset,loading
  }
  // user data can not be remove when refresh or reload
  useEffect(()=>{
    const observer =onAuthStateChanged(auth,currenUser=>{
      setUser(currenUser)
      setLoading(false)
    });
    return ()=>{
      observer()
    }
  },[])

  return (
    <AuthContext.Provider value={user_Information_Send}>
      {children}
    </AuthContext.Provider>
  )
}


 




  
