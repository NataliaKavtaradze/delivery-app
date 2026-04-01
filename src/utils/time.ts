export const generateTimeOptions = () => {
  const times = []

  for (let h = 0; h < 24; h++) {
    for (let m of ["00", "30"]) {
      const hour = h.toString().padStart(2, "0")
      times.push(`${hour}:${m}`)
    }
  }

  return times
}
export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]