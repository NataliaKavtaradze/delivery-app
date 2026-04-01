export const courierFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: false },
  { name: "pid", label: "PID", type: "text", required: true },
  { name: "phoneNumber", label: "Phone Number", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
  { name: "vehicle", label: "Vehicle", type: "text", required: true },
  { name: "profileImage", label: "Profile Image", type: "file", required: false },

  {
    name: "workingDays",
    label: "Working Days",
    type: "workingDays",
    required: true
  }
]