import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const sinIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // sign in with
    const loggedGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // privet route 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('loggedUser is user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        sinIn,
        logOut,
        loggedGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;