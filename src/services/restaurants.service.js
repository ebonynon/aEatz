import axios from "axios";
import { environment } from "../configs/environment";

// Get a Restaurant
export function GetARestaurant() {
  var array = [];

  axios
    .get(environment.baseURL + "/restaurants/")
    .then((e) => {
      array = e.data;
      console.log(array);
      return array;
    })
    .catch((err) => console.error(err));
  return array;
}

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
