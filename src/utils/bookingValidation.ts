type Booking = {
  courierId: number
  userId: number
  day: string
  time: string
}

type WorkingDay = {
  day: string
  startHour: string
  endHour: string
}

// ⛔ უკვე დაჯავშნილია?
export const isTimeBooked = (
  bookings: Booking[],
  courierId: number,
  day: string,
  time: string
) => {
  return bookings.some(
    (b) =>
      b.courierId === courierId &&
      b.day === day &&
      b.time === time
  )
}

// ⛔ user already booked same time
export const isUserDoubleBooked = (
  bookings: Booking[],
  userId: number,
  day: string,
  time: string
) => {
  return bookings.some(
    (b) =>
      b.userId === userId &&
      b.day === day &&
      b.time === time
  )
}

// ⛔ დრო ჯდება სამუშაო გრაფიკში?
export const isWithinWorkingHours = (
  workingDays: WorkingDay[],
  day: string,
  time: string
) => {
  const wd = workingDays.find((d) => d.day === day)
  if (!wd) return false

  return time >= wd.startHour && time <= wd.endHour
}