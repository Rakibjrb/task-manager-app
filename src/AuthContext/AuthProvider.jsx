import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../utilities/firebase.config.js";

export const AuthContext = createContext(null);

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const emailPasswordSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (
    name = "User19419",
    photo = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
  ) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const emailPasswordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    loading,
    user,
    googleLogin,
    userLogout,
    emailPasswordSignUp,
    updateNameAndPhoto,
    emailPasswordLogin,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
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
