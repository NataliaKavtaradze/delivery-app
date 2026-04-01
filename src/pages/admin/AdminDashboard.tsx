import { Box, Card, CardContent, Typography } from "@mui/material"

export default function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Admin Dashboard
      </Typography>

      <Card sx={{ borderRadius: 4, p: 2 }}>
        <CardContent>
          <Typography>
            Welcome 👋 აქედან მართავ users და couriers
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}