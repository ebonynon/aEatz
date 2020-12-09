import {
  Box,
  Grid,
  GridItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function AddComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      margin={1}
      w="100%"
      p={1}
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
