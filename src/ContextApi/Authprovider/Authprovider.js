import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'



export const AuthContext= createContext()
const auth = getAuth(app)

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    console.log('user',user)
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    // GoogleAuthProvider
    const googleSignUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // for logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // for email pass register
    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // for email pass register
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // for update user rofile
    // const updateUserProfile = (profile) =>{
    //     setLoading(true)
    //     return updateProfile(auth.currentUser,profile);
    // }


    const authInfo={
        signUp,logIn,logOut,googleSignUp,user,loading,setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;