import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select
} from "@mui/material"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"user" | "admin" | "courier">("user")
  const navigate = useNavigate()

  const handleLogin = () => {
    login({ email, role })
    navigate("/")   // 🔥 redirect
  }

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
      {/* 🔝 TITLE */}
      <Typography variant="h4" fontWeight={900} mb={4}>
        Courier Management
      </Typography>

      {/* 📦 CARD */}
      <Box
        sx={{
          width: 400,
          background: "#fff",
          borderRadius: 3,
          p: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={1}>
          Sign in to your account
        </Typography>

        <Typography variant="body2" mb={3}>
            Or{" "}
            <Link
              component={RouterLink}
              to="/register"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              create a new account
            </Link>
          </Typography>

        {/* ROLE */}
        <Typography mb={1}>Select Role</Typography>
        <Select
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="courier">Courier</MenuItem>
        </Select>

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* BUTTON */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            background: "linear-gradient(90deg, #6366f1, #4f46e5)"
          }}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  )
}