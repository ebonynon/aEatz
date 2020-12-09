import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
//import { RestaurantsService } from "../../services";
import { environment } from "../../configs/environment";
//import "react-table/react-table.css";
import TableComponent from "../../components/HomePage/Table";

export default function HomePage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get(environment.baseURL + "/restaurants/").then((res) => res.data)
  );

  let table;

  //const { Load, Err, Data } = RestaurantsService.GetARestaurant();
  if (!data) {
    if (isLoading) {
      table = <h1>Nop</h1>;
    }
  } else {
    table = Object.values(data).map((value) => <TableComponent vl={value} />);
  }

  return (
    <Flex justify="center" align="center" p={4}>
      <Box p={1} color="white">
        {table}
      </Box>
    </Flex>
  );
}
