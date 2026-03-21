import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { AuthenticationContext } from "./AuthenticationContext";
import { useEffect } from "react";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        setLoading(false);
        throw error;
      },
    );
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setLoading(false);
      throw error;
    });
  };

  const addNamePhoto = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setLoading(false);
      throw error;
    });
  };

  const Information = {
    createUser: createUser,
    user: user,
    signOutUser: signOutUser,
    userSignIn: userSignIn,
    addNamePhoto: addNamePhoto,
    setUser: setUser,
    loading: loading,
    handleGoogle: handleGoogle,
  };
  return (
    <AuthenticationContext value={Information}>
      {children}
    </AuthenticationContext>
  );
};

export default AuthenticationProvider;
