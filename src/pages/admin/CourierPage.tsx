import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCouriers, deleteCourier } from "../../services/courier.service"
import { Box, Button, Card, CardContent, Typography } from "@mui/material"

export default function CouriersPage() {
  const navigate = useNavigate()
  const [couriers, setCouriers] = useState<any[]>([])

  const fetchData = async () => {
    const res = await getCouriers()
    setCouriers(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    await deleteCourier(id)
    fetchData()
  }

  return (
    <Box p={3}>
      <h2>Couriers</h2>

      {couriers.map((c) => (
        <Card
  sx={{
    borderRadius: 4,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    p: 2,
    transition: "0.2s",
    "&:hover": {
      transform: "translateY(-3px)"
    }
  }}
>
          <CardContent>
            <Typography>
              {c.firstName} - {c.vehicle}
            </Typography>

            <Typography variant="body2">
              Working Days: {c.workingDays?.length}
            </Typography>

            <Button color="error" onClick={() => handleDelete(c.id)}>
              Delete
            </Button>
            <Button
            onClick={() => navigate(`/couriers/${c.id}`)}>Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}