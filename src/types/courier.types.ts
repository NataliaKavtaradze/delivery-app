export type WorkingDay = {
  day: string
  startHour: string
  endHour: string
}

export type CourierFormData = {
  role: "courier"
  firstName: string
  lastName?: string
  pid: string
  phoneNumber: string
  email: string
  password: string
  profileImage?: string
  vehicle: string
  workingDays: WorkingDay[]
}