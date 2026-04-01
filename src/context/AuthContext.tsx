import { createContext, useContext, useState } from "react"

type User = {
  email: string
  role: "admin" | "user" | "courier"
}

type AuthContextType = {
  user: User | null
  login: (data: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (data: User) => {
    setUser(data)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside provider")
  return ctx
}