import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Container from "./Container";

export default function Hero() {
  return (
    <Box bgImage={"/img/bg.png"} bgSize={"cover"}>
      <Container>
        <SimpleGrid columns={[1, null, 2]} gap={8}>
          <VStack
            align={"flex-start"}
            justify={"center"}
            maxW={"401px"}
            ml={[0, null, 8]}
            flexShrink={0}
            py={24}
            gap={0}
          >
            <Text
              color={"wt"}
              fontSize={48}
              fontWeight={600}
              lineHeight={"120%"}
              mb={"27px"}
            >
              Get Started
            </Text>

            <Text color={"wt"} fontSize={18} lineHeight={"120%"}>
              Flight - confirmed! Hotel - sorted! And now, it's time to embark
              on your Bali Scooter Rental adventure! If you're still uncertain
              about your next steps, don’t worry, as we're here to address all
              your queries and concerns.
            </Text>
          </VStack>

          <Image
            src="/img/person.png"
            display={["none", null, "block"]}
            alignSelf={"flex-end"}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}