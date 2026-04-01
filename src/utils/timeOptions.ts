// ⏱️ დროების გენერატორი
export const generateTimeOptions = () => {
  const times: string[] = []

  for (let h = 0; h < 24; h++) {
    for (let m of [0, 30]) {
      const hour = h.toString().padStart(2, "0")
      const minute = m.toString().padStart(2, "0")
      times.push(`${hour}:${minute}`)
    }
  }

  return times
}

// 📅 დღეების სია
export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
]