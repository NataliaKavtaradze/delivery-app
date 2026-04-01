import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import MainLayout from "./components/form/Laypot/MainLayout"

import LoginPage from "./pages/LoginPage"
import AdminDashboard from "./pages/admin/AdminDashboard"
import UsersPage from "./pages/admin/UserPage"
import CouriersPage from "./pages/admin/CourierPage"
import UserDashboard from "./pages/user/UserDashboard"

function App() {
  const { user } = useAuth()

  if (!user) return <LoginPage />

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* 👑 ADMIN */}
          {user.role === "admin" && (
            <>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/couriers" element={<CouriersPage />} />
            </>
          )}

          {/* 👤 USER */}
          {user.role === "user" && (
            <Route path="/" element={<UserDashboard />} />
          )}

          {/* 🚴 COURIER */}
          {user.role === "courier" && (
            <Route path="/" element={<div>Courier Dashboard</div>} />
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App