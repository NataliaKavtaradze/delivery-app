import { useEffect, useState } from "react"
import { getCouriers, deleteCourier } from "../../services/courier.service"

export default function CourierListPage() {
  const [couriers, setCouriers] = useState<any[]>([])

  const fetchData = async () => {
    const res = await getCouriers()
    setCouriers(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    await deleteCourier(id)
    fetchData()
  }

  return (
    <div>
      <h2>Couriers</h2>

      {couriers.map((c) => (
        <div key={c.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p>{c.firstName} - {c.vehicle}</p>

          <button onClick={() => handleDelete(c.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}