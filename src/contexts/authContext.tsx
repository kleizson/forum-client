import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/fiorebase-config";
import isIncludeInAuthorizedRoles from "../helpers/isIncludeInAuthorizedRoles";
import { AuthContextInterface } from "../interfaces/authContextInterface";

const AuthContext = React.createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  async function signup(
    displayName: string,
    email: string,
    password: string
  ): Promise<UserCredential> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {
      displayName,
    });

    return result;
  }

  async function signin(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  async function isAuthorized() {
    if (!currentUser) return;
    const user = await currentUser.getIdTokenResult();

    return isIncludeInAuthorizedRoles(user.claims.role as string);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signin,
    signup,
    logout,
    isAuthorized,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
