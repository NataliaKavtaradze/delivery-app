import { FieldConfig } from "@/types/form.types"

export const adminFields: FieldConfig[] = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "pid", label: "PID", type: "text", required: true },
  { name: "phoneNumber", label: "Phone", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true },
]