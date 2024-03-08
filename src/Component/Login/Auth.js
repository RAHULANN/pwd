import React, { useState, useEffect, createContext, useContext } from "react";

import { auth } from "../../Firebase";

// Create a context to manage authentication state
const AuthContext = createContext();

// AuthProvider component to manage authentication state
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const signUp = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Sign-up error:", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to access authentication context
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
