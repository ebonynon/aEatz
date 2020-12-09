import axios from "axios";
import { useQuery } from "react-query";
//import { RestaurantsService } from "../../services";
import { environment } from "../../configs/environment";

export default function HomePage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get(environment.baseURL + "/restaurants/").then((res) => res.data)
  );

  //const { Load, Err, Data } = RestaurantsService.GetARestaurant();

  if (data) {
    console.log(data);
  }

  return <h1>It Worked..!</h1>;
}
