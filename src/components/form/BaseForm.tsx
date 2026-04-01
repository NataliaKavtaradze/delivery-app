import { useState } from "react"
import { TextField, Button, Box, Typography } from "@mui/material"
import WorkingDaysField from "./WorkingDaysField"
import { uploadToCloudinary } from "../../services/cloudinary"
import { validateForm } from "../../utils/validation"
import UploadField from "./fields/UploadField"

export default function BaseForm({ fields, onSubmit }: any) {
  const [formData, setFormData] = useState<any>({})
  const [errors, setErrors] = useState<any>({})

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const updatedData = { ...formData }

    if (formData.profileImage instanceof File) {
      const url = await uploadToCloudinary(formData.profileImage)
      updatedData.profileImage = url
    }

    onSubmit(updatedData)
  }

  return (
    <Box maxWidth={500} mx="auto" mt={5} p={4} sx={{
    background: "#fff",
    borderRadius: 4,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  }}>
      
      <Typography variant="h5" fontWeight={600} mb={2}>
         Courier Registration
      </Typography>
      {fields.map((field: any) => {
        if (field.type === "workingDays") {
          return (
            <Box key={field.name} mt={2}>
              <WorkingDaysField
                value={formData.workingDays || []}
                onChange={(val) => handleChange("workingDays", val)}
              />
              {errors.workingDays && (
                <Typography color="error">
                  {errors.workingDays}
                </Typography>
              )}
            </Box>
          )
        }

        return (
          <Box key={field.name} mb={2}>
            {field.type === "file" ? (
              <UploadField
    onChange={(file) => handleChange(field.name, file)}
    error={errors[field.name]}
  />
            ) : (
              <TextField
                fullWidth
                label={field.label}
                type={field.type}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
                error={!!errors[field.name]}
                helperText={errors[field.name]}
              />
            )}
          </Box>
        )
      })}

      <Button
        variant="contained"
        fullWidth
          sx={{
    borderRadius: 3,
    textTransform: "none",
    fontWeight: 600
  }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  )
}