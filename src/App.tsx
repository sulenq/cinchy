import {
  Box,
  ChakraProvider,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { globalTheme } from "./globalTheme";
import NavHeader from "./components/NavHeader";
import Container from "./components/Container";
import "./globalStyle.css";

export const App = () => {
  return (
    <ChakraProvider theme={globalTheme}>
      <VStack align={"stretch"}>
        <Container>
          <NavHeader />
        </Container>

        <Box position={"relative"}>
          <Box
            bgImage={"/img/bg.png"}
            bgSize={"cover"}
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={0}
            left={0}
            zIndex={-1}
          />
          <Box
            w={"100%"}
            h={"100%"}
            bg={"#00332C"}
            position={"absolute"}
            top={0}
            left={0}
            mixBlendMode={"color"}
            zIndex={-1}
          />

          <Container>
            <SimpleGrid columns={[1, null, 2]} gap={8}>
              <VStack
                align={"flex-start"}
                justify={"center"}
                maxW={"401px"}
                ml={[0, null, 16]}
              >
                <Text color={"wt"} fontSize={48} fontWeight={600}>
                  Get Started
                </Text>

                <Text color={"wt"} fontSize={18}>
                  Flight - confirmed! Hotel - sorted! And now, it's time to
                  embark on your Bali Scooter Rental adventure! If you're still
                  uncertain about your next steps, don’t worry, as we're here to
                  address all your queries and concerns.
                </Text>
              </VStack>

              <Image src="/img/person.png" display={["none", null, "block"]} />
            </SimpleGrid>
          </Container>
        </Box>

        <Container>
          <HStack>
            
          </HStack>
        </Container>
      </VStack>
    </ChakraProvider>
  );
};
