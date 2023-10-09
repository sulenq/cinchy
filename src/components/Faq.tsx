import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import useFaq from "../globalState/useFaq";

export default function Faq(props: any) {
  const { faqData, activeFaqFilter } = useFaq();

  return (
    <Box {...props}>
      <Heading fontSize={36} fontWeight={600} mb={4}>
        {activeFaqFilter}
      </Heading>

      <Accordion allowMultiple w={"100%"}>
        {faqData?.map((f, i) => {
          if (f.topic === activeFaqFilter || activeFaqFilter === "All") {
            return (
              <AccordionItem
                key={i}
                border={"1px solid var(--Snowgum-300)"}
                bg={"white"}
                borderRadius={20}
                mb={4}
              >
                <AccordionButton
                  borderRadius={20}
                  p={6}
                  _hover={{ bg: "transparent" }}
                >
                  <Box w={"100%"}>
                    <HStack
                      flex={1}
                      align={"flex-start"}
                      justify={"space-between"}
                      mb={"34px"}
                    >
                      <Text fontSize={38}>{f.title}</Text>

                      <Center bg={"var(--BG)"} p={2} borderRadius={"full"}>
                        <AccordionIcon />
                      </Center>
                    </HStack>

                    <Text textAlign={"left"}>{f.shortInfo}</Text>
                  </Box>
                </AccordionButton>

                <AccordionPanel p={6} mt={"-10px"}>
                  <Text borderTop={"1px solid var(--p500)"} pt={"34px"}>
                    {f.longInfo}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            );
          }

          return null;
        })}
      </Accordion>
    </Box>
  );
}