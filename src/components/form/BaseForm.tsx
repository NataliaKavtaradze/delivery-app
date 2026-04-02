import { useState } from "react"
import { Button, Box } from "@mui/material"
import WorkingDaysField from "./WorkingDaysField"
import { uploadToCloudinary } from "../../services/cloudinary"
import { validateForm } from "../../utils/validation"
import { FormField } from "./FormField"

export default function BaseForm({ fields, onSubmit }: any) {
  const [formData, setFormData] = useState<any>({
  role: "user"
})
  const [errors, setErrors] = useState<any>({})
  
  const role = formData.role
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
      
          {fields.map((field: any) => {
  // USER
  if (field.name === "address" && role !== "user") return null

  // COURIER ONLY
 if (field.name === "workingDays" && role !== "courier") return null
if (field.name === "vehicle" && role !== "courier") return null
if (field.name === "address" && role !== "user") return null
  return (
    <Box key={field.name} mb={2}>
      {field.name === "workingDays" ? (
        <>
          <WorkingDaysField
            value={formData.workingDays || []}
            onChange={(val) => handleChange("workingDays", val)}
          />
        </>
      ) : (
        <FormField
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
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
       Create Account
      </Button>
    </Box>
  )
  console.log("ROLE:", role)
}