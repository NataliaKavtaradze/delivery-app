import { TextField, MenuItem } from "@mui/material"

export const FormField = ({ field, value, onChange, error }: any) => {
  if (field.type === "select") {
    return (
      <TextField
        select
        fullWidth
        label={field.label}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        error={!!error}
        helperText={error}
      >
        {field.options?.map((opt: any) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    )
  }

  if (field.type === "file") {
    return (
      <input
        type="file"
        onChange={(e) =>
          onChange(field.name, e.target.files?.[0])
        }
      />
    )
  }

  return (
    <TextField
      fullWidth
      type={field.type}
      label={field.label}
      value={value || ""}
      onChange={(e) => onChange(field.name, e.target.value)}
      error={!!error}
      helperText={error}
    />
  )
}