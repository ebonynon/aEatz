import Axios from "axios";
import { environment } from "../configs/environment";

// Get a Restaurant
export function GetARestaurant() {
  var array = [];

  Axios.get(environment.baseURL + "restaurants/")
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
}
