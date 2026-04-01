import { TextField, MenuItem } from "@mui/material"
import { useFormContext } from "react-hook-form"
import  type { FieldConfig } from "@/types/form.types"

type Props = {
  field: FieldConfig
}

export const FormField = ({ field }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[field.name]

  switch (field.type) {
    case "select":
      return (
        <TextField
          select
          label={field.label}
          {...register(field.name, { required: field.required })}
          error={!!error}
          helperText={error && "Required"}
          fullWidth
          margin="normal"
        >
          {field.options?.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      )

    case "file":
      return (
        <input
          type="file"
          {...register(field.name, { required: field.required })}
        />
      )

    default:
      return (
        <TextField
          type={field.type}
          label={field.label}
          {...register(field.name, { required: field.required })}
          error={!!error}
          helperText={error && "Required"}
          fullWidth
          margin="normal"
        />
      )
  }
}