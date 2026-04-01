import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
   <AuthProvider>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </AuthProvider>
)