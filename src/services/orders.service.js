import axios from "axios";
import { environment } from "../configs/environment";

export function AddAOrder(data) {
  console.log(data);
  axios
    .post(environment.baseURL + "/orders/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function UpdateAOrder(id, data) {
  console.log(data);
  axios
    .put(environment.baseURL + "/orders/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function DeleteAOrder(id) {
  axios
    .delete(environment.baseURL + "/orders/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
