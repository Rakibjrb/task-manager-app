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
import useAxiosPublic from "../Hooks/axios/useAxiosPublic.jsx";

export const AuthContext = createContext(null);

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const axiosPublic = useAxiosPublic();

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

      if (!user) {
        localStorage.removeItem("token");
      } else {
        axiosPublic
          .post("/create-token", { email: user?.email })
          .then((res) => {
            const token = res?.data?.token;
            localStorage.setItem("token", token);
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
