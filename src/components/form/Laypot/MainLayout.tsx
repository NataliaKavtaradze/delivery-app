import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material"
import { useAuth } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function MainLayout({ children }: any) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {/* 🔝 HEADER */}
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            Delivery App
          </Typography>

          <Box>
            {user?.role === "admin" && (
              <>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Dashboard
                </Button>
                <Button color="inherit" onClick={() => navigate("/users")}>
                  Users
                </Button>
                <Button color="inherit" onClick={() => navigate("/couriers")}>
                  Couriers
                </Button>
              </>
            )}

            {user?.role === "user" && (
              <Button color="inherit" onClick={() => navigate("/")}>
                Couriers
              </Button>
            )}

            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 📦 CONTENT */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "#f5f7fb",
          p: 3
        }}
      >
        {children}
      </Box>
    </>
  )
}