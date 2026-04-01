import BaseForm from "../../components/form/BaseForm"
import { courierFields } from "../../config/courier.fields"

export default function CourierFormPage() {
  const handleSubmit = (data: any) => {
    console.log("FINAL DATA:", data)
  }

  return <BaseForm fields={courierFields} onSubmit={handleSubmit} />
}