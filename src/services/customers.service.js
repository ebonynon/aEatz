import axios from "axios";
import { environment } from "../configs/environment";

export function AddACustomers(data) {
  console.log(data);
  axios
    .post(environment.baseURL + "/customers/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function UpdateACustomers(id, data) {
  console.log(data);
  axios
    .put(environment.baseURL + "/customers/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function DeleteACustomers(id) {
  axios
    .delete(environment.baseURL + "/customers/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
