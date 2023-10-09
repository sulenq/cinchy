import { Box, ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import { globalTheme } from "./globalTheme";
import NavHeader from "./components/NavHeader";
import Container from "./components/Container";
import "./globalStyle.css";
import FaqFilter from "./components/FaqFilter";
import Hero from "./components/Hero";
import Faq from "./components/Faq";

export const App = () => {
  return (
    <ChakraProvider theme={globalTheme}>
      <VStack minH={"100vh"} align={"stretch"} gap={0}>
        <Container>
          <NavHeader />
        </Container>

        <Box id="hero" position={"relative"}>
          <Hero />
        </Box>

        <Box id="faq" flex={1} bg={"var(--BG)"} pt={8}>
          <Container>
            <HStack
              gap={8}
              align={"flex-start"}
              flexDir={["column", null, "row"]}
            >
              <FaqFilter position={"sticky"} top={[2, null, 8]} />

              <Faq flex={1} />
            </HStack>
          </Container>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};
