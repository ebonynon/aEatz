import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  useDisclosure,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function AddComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" margin={1} w="100%" p={1}>
        <Grid templateColumns="repeat(6, 1fr)" align="center" gap={6}>
          <GridItem colStart={6}>
            <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
              Add Restaurant
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add New Restaurant</DrawerHeader>
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Add</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
