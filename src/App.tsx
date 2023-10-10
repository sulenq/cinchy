import { Box, ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import { globalTheme } from "./globalTheme";
import NavHeader from "./components/NavHeader";
import Container from "./components/Container";
import "./globalStyle.css";
import FaqFilter from "./components/FaqFilter";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import useScreenWidth from "./utils/useGetScreenWidth";

export const App = () => {
  const sw = useScreenWidth();

  return (
    <ChakraProvider theme={globalTheme}>
      <VStack minH={"100vh"} align={"stretch"} gap={0}>
        <Box id="nav" position={"sticky"} top={0} zIndex={99} bg="white">
          <Container>
            <NavHeader />
          </Container>
        </Box>

        <Box id="hero" position={"relative"}>
          <Hero />
        </Box>

        <Box id="faq" flex={1} bg={"var(--BG)"} pt={12} pb={4}>
          <Container>
            <HStack
              gap={[4, null, '100px']}
              align={"flex-start"}
              flexDir={["column", null, "row"]}
            >
              <FaqFilter
                position={"sticky"}
                top={sw < 920 ? "80px" : "122px"}
              />

              <Faq flex={1} />
            </HStack>
          </Container>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};
