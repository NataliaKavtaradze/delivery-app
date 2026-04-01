import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Box, Button, Card, CardContent, Typography } from "@mui/material"

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([])

  const fetchUsers = async () => {
    const res = await api.get("/users")
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDelete = async (id: number) => {
    await api.delete(`/users/${id}`)
    fetchUsers()
  }

  return (
    <Box p={3}>
      <h2>Users</h2>

      {users.map((u) => (
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
            <Typography>{u.firstName} ({u.email})</Typography>

            <Button color="error" onClick={() => handleDelete(u.id)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}