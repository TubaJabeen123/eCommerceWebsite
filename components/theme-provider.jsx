"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "light", setTheme: () => null })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Only run theme-related code on the client side
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)

    // Apply theme to document
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(savedTheme)
  }, [])

  // Function to change theme
  const changeTheme = (newTheme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

