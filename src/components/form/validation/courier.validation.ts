import * as yup from "yup"

export const courierSchema = yup.object({
  firstName: yup.string().required(),
  pid: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  vehicle: yup.string().required(),

  workingDays: yup
    .array()
    .min(5, "Minimum 5 working days required"),
})