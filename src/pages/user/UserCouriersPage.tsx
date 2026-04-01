import { useEffect, useState } from "react"
import { getCouriers } from "../../services/courier.service"
import { getBookings, createBooking } from "../../services/booking.service"
import { Box, Card, CardContent, Typography, Button, Select, MenuItem } from "@mui/material"
import { generateTimeOptions } from "../../utils/timeOptions"
import {
  isTimeBooked,
  isUserDoubleBooked,
  isWithinWorkingHours
} from "../../utils/bookingValidation"

export default function UserCouriersPage() {
  const [couriers, setCouriers] = useState<any[]>([])
  const [bookings, setBookings] = useState<any[]>([])
  const [selected, setSelected] = useState<any>({})
  const times = generateTimeOptions()

  const fetchData = async () => {
    const c = await getCouriers()
    const b = await getBookings()

    setCouriers(c.data)
    setBookings(b.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

 const handleBook = async (courierId: number) => {
  const data = selected[courierId]

  if (!data?.day || !data?.time) {
    alert("აირჩიე დღე და დრო")
    return
  }

  if (
    isTimeBooked(bookings, courierId, data.day, data.time)
  ) {
    alert("ეს დრო უკვე დაკავებულია ❌")
    return
  }

  if (
    isUserDoubleBooked(bookings, 1, data.day, data.time)
  ) {
    alert("ამ დროს უკვე სხვა კურიერი გყავს გამოძახებული ❌")
    return
  }

  if (
    !isWithinWorkingHours(couriers.find(c => c.id === courierId).workingDays, data.day, data.time)
  ) {
    alert("ეს დრო არ ჯდება სამუშაო საათებში ❌")
    return
  }

  await createBooking({
    userId: 1,
    courierId,
    day: data.day,
    time: data.time
  })

  alert("Booked successfully✅")
  fetchData()
}

  return (
    <Box p={3}>
      <h2>Couriers</h2>

      {couriers.length === 0 ? (
  <p>No couriers found</p>
) : (
      couriers.map((c) => (
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
            <Typography>{c.firstName} - {c.vehicle}</Typography>

            {/* 📅 Day */}
            <Select
              fullWidth
              sx={{ mt: 2, borderRadius: 2 }}
              value={selected[c.id]?.day || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  [c.id]: {
                    ...selected[c.id],
                    day: e.target.value
                  }
                })
              }
            >
              {c.workingDays?.map((d: any) => (
                <MenuItem key={d.day} value={d.day}>
                  {d.day}
                </MenuItem>
              ))}
            </Select>

            {/* ⏰ Time */}
            <Select
              fullWidth
              sx={{ mt: 2 }}
              value={selected[c.id]?.time || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  [c.id]: {
                    ...selected[c.id],
                    time: e.target.value
                  }
                })
              }
            >
              {times.map((t) => (
                <MenuItem
  key={t}
  value={t}
  disabled={
    !selected[c.id]?.day ||

    // ❌ უკვე დაჯავშნილია
    isTimeBooked(bookings, c.id, selected[c.id]?.day, t) ||

    // ❌ user სხვა კურიერზე აქვს იგივე დრო
    isUserDoubleBooked(bookings, 1, selected[c.id]?.day, t) ||

    // ❌ არ ჯდება სამუშაო საათებში
    !isWithinWorkingHours(c.workingDays, selected[c.id]?.day, t)
  }
>
  {t}
</MenuItem>
              ))}
            </Select>

            <Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600
              }}
              onClick={() => handleBook(c.id)}
            >
              Book Courier
            </Button>
          </CardContent>
        </Card>
      ))
    )}
    </Box>
  )
}