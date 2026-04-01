import { api } from "./api"

export const createBooking = (data: any) => {
  return api.post("/bookings", data)
}

export const getBookings = () => {
  return api.get("/bookings")
}