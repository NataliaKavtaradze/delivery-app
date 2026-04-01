export const validateForm = (data: any) => {
  const errors: any = {}

  // required fields
  const requiredFields = [
    "firstName",
    "pid",
    "phoneNumber",
    "email",
    "password",
    "vehicle"
  ]

  requiredFields.forEach((field) => {
    if (!data[field]) {
      errors[field] = "Required"
    }
  })

  // email validation
  if (data.email && !data.email.includes("@")) {
    errors.email = "Invalid email"
  }

  // workingDays validation
  if (!data.workingDays || data.workingDays.length < 5) {
    errors.workingDays = "Minimum 5 working days required"
  }

  return errors
}