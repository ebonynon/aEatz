import axios from "axios";
import { environment } from "../configs/environment";

export function AddARestaurant(data) {
  console.log(data);
  axios
    .post(environment.baseURL + "/restaurants/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function UpdateARestaurant(id, data) {
  console.log(data);
  axios
    .put(environment.baseURL + "/restaurants/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function DeleteARestaurant(id) {
  axios
    .delete(environment.baseURL + "/restaurants/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
