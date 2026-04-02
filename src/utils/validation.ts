export const validateForm = (data: any) => {
  const errors: any = {}

  // 🔹 საერთო required fields
  Object.keys(data).forEach((key) => {
    if (
      !data[key] &&
      key !== "lastName" &&
      key !== "profileImage"
    ) {
      errors[key] = "Required"
    }
  })

  // 🚴 COURIER RULES
  if (data.role === "courier") {
    // vehicle required
    if (!data.vehicle) {
      errors.vehicle = "Vehicle is required"
    }

    // workingDays მინ 5
    if (!data.workingDays || data.workingDays.length < 5) {
      errors.workingDays = "Select at least 5 working days"
    }
  }

  // 👤 USER RULE
  if (data.role === "user") {
    if (!data.address) {
      errors.address = "Address is required"
    }
  }

  return errors
}