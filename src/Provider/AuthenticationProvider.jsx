import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { AuthenticationContext } from "./AuthenticationContext";
import { useEffect } from "react";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const Information = {
    createUser: createUser,
    user: user,
  };
  return (
    <AuthenticationContext value={Information}>
      {children}
    </AuthenticationContext>
  );
};

export default AuthenticationProvider;
