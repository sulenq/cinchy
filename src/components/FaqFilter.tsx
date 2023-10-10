import {
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FaqData } from "../types";
import useFaq from "../globalState/useFaq";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useScreenWidth from "../utils/useGetScreenWidth";

export default function FaqFilter(props: any) {
  const bg = useColorModeValue("white", "black");
  const sw = useScreenWidth();
  const [filterOptions, setFilterOptions] = useState<string[] | "loading">(
    "loading"
  );
  const [menuListW, setMenuListW] = useState<number>(sw - 32);
  const { faqData, activeFaqFilter, setActiveFaqFlter, setFaqData } = useFaq();
  const faqFilterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const getFilter = async () => {
      try {
        const result = await axios.get(
          "https://cinchy-coding-test-api.onrender.com/api/faq"
        );

        setFaqData(result.data);

        let topics: string[] = result.data.reduce(
          (unique: string[], obj: FaqData) => {
            return unique.includes(obj.topic) ? unique : [...unique, obj.topic];
          },
          []
        );

        setFilterOptions(topics);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getFilter();
  }, [setFaqData]);

  useEffect(() => {
    if (faqFilterButtonRef.current) {
      setMenuListW(faqFilterButtonRef.current?.offsetWidth);
    }
  }, [sw]);

  const handleSelectFilterOption = (filterOption: string) => {
    setActiveFaqFlter(filterOption);
  };

  if (sw < 920) {
    return (
      <HStack {...props} w={"100%"} mt={"-60px"} zIndex={2}>
        <Menu>
          {(props) => {
            const { isOpen, onClose } = props;

            return (
              <>
                <MenuButton
                  ref={faqFilterButtonRef}
                  w={"100%"}
                  borderRadius={20}
                  h={"56px"}
                  px={4}
                  bg={"white"}
                  border={"1px solid var(--Snowgum-300)"}
                >
                  <HStack w={"100%"} justify={"space-between"}>
                    <Text>
                      {activeFaqFilter === "All"
                        ? `${activeFaqFilter} (${
                            faqData?.length || "calculating"
                          })`
                        : `${activeFaqFilter} (${
                            faqData?.filter(
                              (faq) => faq.topic === activeFaqFilter
                            ).length
                          })`}
                    </Text>

                    <Icon
                      as={PlayArrowIcon}
                      transition={"200ms"}
                      transform={isOpen ? "rotate(-90deg)" : "rotate(90deg)"}
                    />
                  </HStack>
                </MenuButton>

                <MenuList p={0} minW={`${menuListW}px`}>
                  <MenuItem>
                    <Box
                      w={"100%"}
                      borderBottom={"1px solid var(--divider)"}
                      onClick={() => {
                        handleSelectFilterOption("All");
                        onClose();
                      }}
                    >
                      <Text
                        py={4}
                        px={4}
                        bg={activeFaqFilter === "All" ? "p.600" : ""}
                        cursor={"pointer"}
                      >
                        {`All (${faqData?.length || "calculating"})`}
                      </Text>
                    </Box>
                  </MenuItem>

                  {filterOptions !== "loading" &&
                    filterOptions.map((f, i) => (
                      <MenuItem key={i}>
                        <Box
                          w={"100%"}
                          key={i}
                          borderBottom={
                            i !== filterOptions.length - 1
                              ? "1px solid var(--divider)"
                              : ""
                          }
                          onClick={() => {
                            handleSelectFilterOption(f);
                            onClose();
                          }}
                        >
                          <Text
                            py={4}
                            px={4}
                            bg={activeFaqFilter === f ? "p.600" : ""}
                            borderRadius={
                              i === filterOptions.length - 1
                                ? "0 0 20px 20px"
                                : ""
                            }
                            cursor={"pointer"}
                          >
                            {`${f} (${
                              faqData?.filter((faq) => faq.topic === f).length
                            })`}
                          </Text>
                        </Box>
                      </MenuItem>
                    ))}
                </MenuList>
              </>
            );
          }}
        </Menu>
      </HStack>
    );
  } else {
    return (
      <VStack
        {...props}
        id="faqFilter"
        align={"stretch"}
        w={"100%"}
        maxW={"312px"}
        p={6}
        borderRadius={20}
        border={"1px solid var(--Snowgum-300)"}
        bg={bg}
        gap={0}
      >
        <Box
          pb={4}
          borderBottom={"1px solid var(--p500)"}
          onClick={() => {
            handleSelectFilterOption("All");
          }}
        >
          <Text
            py={4}
            pr={4}
            bg={activeFaqFilter === "All" ? "rgba(0, 51, 44, 0.10)" : ""}
            borderRadius={"0 10px 10px 0"}
            cursor={"pointer"}
          >
            All
          </Text>
        </Box>

        {filterOptions !== "loading" &&
          filterOptions.map((f, i) => (
            <Box
              key={i}
              py={4}
              borderBottom={"1px solid var(--p500)"}
              onClick={() => {
                handleSelectFilterOption(f);
              }}
            >
              <Text
                py={4}
                pr={4}
                bg={activeFaqFilter === f ? "rgba(0, 51, 44, 0.10)" : ""}
                borderRadius={"0 10px 10px 0"}
                cursor={"pointer"}
              >
                {f}
              </Text>
            </Box>
          ))}
      </VStack>
    );
  }
}
