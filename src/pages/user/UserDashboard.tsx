import UserCouriersPage from "./UserCouriersPage"
import { Typography } from "@mui/material"

export default function UserDashboard() {
  return (
    <>
      <Typography variant="h4" mb={2}>
        Available Couriers
      </Typography>

      <UserCouriersPage />
    </>
  )
}