import { api } from "./api"

export const createCourier = (data: any) => {
  return api.post("/couriers", data)
}

export const getCouriers = () => {
  return api.get("/couriers")
}

export const deleteCourier = (id: number) => {
  return api.delete(`/couriers/${id}`)
}