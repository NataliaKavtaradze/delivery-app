import { useState } from "react"
import { Box, Button, Typography } from "@mui/material"

type Props = {
  onChange: (file: File) => void
  error?: string
}

export default function UploadField({ onChange, error }: Props) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (file: File) => {
    onChange(file)

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Box>
      <Button variant="outlined" component="label">
        Upload Image
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleFileChange(file)
          }}
        />
      </Button>

      {/* 🖼️ Preview */}
      {preview && (
        <Box mt={2}>
          <img
            src={preview}
            alt="preview"
             style={{
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover"
  }}
          />
        </Box>
      )}

      {/* ❗ Error */}
      {error && (
        <Typography color="error">{error}</Typography>
      )}
    </Box>
  )
}