import {
  Box,
  Grid,
  GridItem,
  Button,
  colorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function AddComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Grid templateColumns="repeat(6, 1fr)" align="center" gap={6}>
        <GridItem colStart={6}>
          <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
            Add Restaurant
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
