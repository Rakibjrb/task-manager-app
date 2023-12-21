import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../utilities/firebase.config.js";

export const AuthContext = createContext(null);

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const googleLogin = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  const authInfo = {
    loading,
    user,
    googleLogin,
    userLogout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
