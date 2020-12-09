import { Box, Grid, useColorMode, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
export default function TableComponent(props) {
  const value = props.vl;
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.500" };
  const boxColor = { light: "teal.300", dark: "teal.600" };
  const textColor = { light: "black", dark: "gray.100" };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      margin={1}
      w="100%"
      p={1}
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
    >
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.ResID}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.Name}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.Location}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.Phone}
        </Box>
        <Box align="center">
          <IconButton
            rounded="full"
            //onClick={}
            icon={<EditIcon />}
            bg={boxColor[colorMode]}
          />
        </Box>
        <Box align="center">
          <IconButton
            rounded="full"
            //onClick={}
            icon={<DeleteIcon />}
            bg={boxColor[colorMode]}
          />
        </Box>
      </Grid>
    </Box>
  );
}
