import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import BaseForm from "../../components/form/BaseForm"
import { courierFields } from "../../config/courier.fields"

export default function EditCourierPage() {
  const { id } = useParams()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    api.get(`/couriers/${id}`).then((res) => {
      setData(res.data)
    })
  }, [])

  const handleUpdate = async (updated: any) => {
    await api.put(`/couriers/${id}`, updated)
    alert("Updated ✅")
  }

  if (!data) return <p>Loading...</p>

  return (
    <BaseForm
      fields={courierFields}
      onSubmit={handleUpdate}
    />
  )
}