import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null;
// create user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
// sign in user
    const sinIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
// privet route    
    const authInfo = {
        user,
        createUser,
        sinIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;