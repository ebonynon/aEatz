import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { environment } from "../../configs/environment";
import TableComponent from "../../components/Customers/Table";
import AddComponent from "../../components/Customers/Add";

export default function CustomersPage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get(environment.baseURL + "/customers/").then((res) => res.data)
  );

  let table;

  if (error) {
    console.log(error.message);
  }

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
        <AddComponent />
        {table}
      </Box>
    </Flex>
  );
}
