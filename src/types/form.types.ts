export type FieldConfig = {
  name: string
  label: string
  type: "text" | "email" | "password" | "select" | "file"
  required?: boolean
  options?: { label: string; value: string }[]
}