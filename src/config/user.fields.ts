export const userFields = [
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { label: "User", value: "user" },
      { label: "Courier", value: "courier" },
      { label: "Admin", value: "admin" }
    ],
    required: true
  },
  {
    name: "profileImage",
    label: "Profile Image",
    type: "file"
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text"
  },
  {
    name: "email",
    label: "Email",
    type: "text"
  },
  {
    name: "password",
    label: "Password",
    type: "password"
  },
  {
    name: "phoneNumber",
    label: "Phone",
    type: "text"
  },
  {
    name: "pid",
    label: "Personal ID",
    type: "text"
  },
  {
    name: "address",
    label: "Address",
    type: "text"
  },
  {
    name: "vehicle",
    label: "Vehicle",
    type: "text"
  },
  {
    name: "workingDays",
    label: "Working Days",
    type: "workingDays"
  }
]