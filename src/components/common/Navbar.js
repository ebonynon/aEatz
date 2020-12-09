import {
  Flex,
  Stack,
  Box,
  useColorMode,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "gray.300", dark: "gray.600" };
  const textColor = { light: "black", dark: "gray.100" };
  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      justify="center"
      align="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "100vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <Image
            h="4vh"
            src="https://i.postimg.cc/6Q2mG0fX/logo-01.png"
            alt="Logo of Chakra-ui"
          />
        </Box>
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/">
              <a>Restaurants</a>
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/food-items" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/food-items">
              <a>Food Items</a>
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/customers" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/customers">
              <a>Customers</a>
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/orders" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/orders">
              <a>Orders</a>
            </Link>
          </Box>
        </Stack>
        <Box>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
}
