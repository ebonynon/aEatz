import {
  Flex,
  Stack,
  Box,
  useColorMode,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "gray.300", dark: "gray.600" };
  const textColor = { light: "black", dark: "gray.100" };
  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      align="center"
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
          <Image h="4vh" src="../../logo.svg" alt="Logo of Chakra-ui" />
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
            opacity={window.location.pathname !== "/" ? 0.4 : 1}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </Box>
          <Box
            position="relative"
            opacity={window.location.pathname !== "/form" ? 0.4 : 1}
          >
            <Link to="/form">
              <a>Form</a>
            </Link>
          </Box>
          <Box
            position="relative"
            opacity={window.location.pathname !== "/card" ? 0.4 : 1}
          >
            <Link href="/card">
              <a>Card</a>
            </Link>
          </Box>
          <Box
            position="relative"
            opacity={window.location.pathname !== "/list" ? 0.4 : 1}
          >
            <Link href="/list">
              <a>List</a>
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
