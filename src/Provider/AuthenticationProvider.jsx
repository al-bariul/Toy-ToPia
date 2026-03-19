import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
    return signInWithEmailAndPassword(auth, email, password);
  };

  const addNamePhoto = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  const Information = {
    createUser: createUser,
    user: user,
    signOutUser: signOutUser,
    userSignIn: userSignIn,
    addNamePhoto: addNamePhoto,
    setUser: setUser,
    loading: loading,
  };
  return (
    <AuthenticationContext value={Information}>
      {children}
    </AuthenticationContext>
  );
};

export default AuthenticationProvider;
