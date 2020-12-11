import axios from "axios";
import { environment } from "../configs/environment";

export function AddAFoodItem(data) {
  console.log(data);
  axios
    .post(environment.baseURL + "/food-items/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function UpdateAFoodItem(id, data) {
  console.log(data);
  axios
    .put(environment.baseURL + "/food-items/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export function DeleteAFoodItem(id) {
  axios
    .delete(environment.baseURL + "/food-items/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
