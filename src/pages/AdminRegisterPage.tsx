import BaseForm from "../components/form/BaseForm"
import { adminFields } from "@/components/form/configs/adminFields"

export const AdminRegisterPage = () => {
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return <BaseForm fields={adminFields} onSubmit={onSubmit} />
}