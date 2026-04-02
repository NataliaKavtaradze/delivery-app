import { Box, Typography } from "@mui/material"
import BaseForm from "../components/form/BaseForm"
import { userFields } from "../config/user.fields"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function RegisterPage() {
    const navigate = useNavigate()
     const { login } = useAuth()
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={4}>
        Courier Management
      </Typography>

      <Box
        sx={{
          width: 420,
          background: "#fff",
          borderRadius: 3,
          p: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={1}>
          Create your account
        </Typography>

        <Typography variant="body2" mb={2}>
          Already have an account?{" "}
          <a href="/login">Sign in</a>
        </Typography>

        <BaseForm
  fields={userFields}
  onSubmit={(data: any) => {
    login(data)        // ვინახავთ user-ს context-ში
    navigate("/")      // 🔥 redirect
  }}
/>
      </Box>
    </Box>
  )
}