"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { initializeFirebase } from "@/lib/firebase"

// Default context value
const AuthContext = createContext({
  user: null,
  loading: true,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  const [firebaseAuth, setFirebaseAuth] = useState(null)

  // Initialize Firebase on client side
  useEffect(() => {
    const { auth } = initializeFirebase()
    setFirebaseAuth(auth)
    setFirebaseInitialized(true)
  }, [])

  // Set up auth listener after Firebase is initialized
  useEffect(() => {
    if (!firebaseInitialized || !firebaseAuth) return

    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [firebaseInitialized, firebaseAuth])

  // Auth functions
  const signUp = async (email, password) => {
    if (!firebaseAuth) throw new Error("Auth not initialized")
    return await createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  const signIn = async (email, password) => {
    if (!firebaseAuth) throw new Error("Auth not initialized")
    return await signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const logout = async () => {
    if (!firebaseAuth) throw new Error("Auth not initialized")
    return await signOut(firebaseAuth)
  }

  return <AuthContext.Provider value={{ user, loading, signUp, signIn, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

