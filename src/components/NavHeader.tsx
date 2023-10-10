import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
import headerNav from "../const/headerNav";
import useScreenWidth from "../utils/useGetScreenWidth";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { PrimaryOutlineButton, SeccondaryOutlineButton } from "./Buttons";

export default function NavHeader() {
  const logo = useColorModeValue("/logo.webp", "/logoDarkMode.webp");
  const color = useColorModeValue("#00332C", "wt");
  const sw = useScreenWidth();

  const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <IconButton
          aria-label="menuButton"
          icon={<Icon as={MenuIcon} fontSize={30} color={color} />}
          variant={"ghost"}
          className="btn sm-clicky"
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />

          <DrawerContent bg={"p.500"}>
            <IconButton
              aria-label="menuButton"
              icon={<Icon as={CloseIcon} fontSize={30} />}
              className="sm-clicky"
              bg={"white"}
              _hover={{ bg: "white" }}
              _active={{ bg: "white" }}
              color={"bt"}
              borderRadius={"full"}
              w={"50px"}
              h={"50px"}
              position={"absolute"}
              left={"-25px"}
              top={"50%"}
              onClick={onClose}
              zIndex={99}
            />

            <Box position={"relative"} zIndex={2} overflow={"auto"}>
              <VStack
                minH={"100vh"}
                justify={"center"}
                overflow={"auto"}
                gap={6}
                p={"50px"}
                // pb={'100px'}
              >
                <Image
                  h="43px"
                  src={"/logoDarkMode.webp"}
                  objectFit={"contain"}
                  mb={12}
                />

                {headerNav.map((n, i) => (
                  <Text
                    as={Link}
                    key={i}
                    className="ns"
                    px={4}
                    fontSize={24}
                    _hover={{ opacity: 0.5 }}
                  >
                    {n.name}
                  </Text>
                ))}

                {/* <ColorModeSwitcher
                borderRadius={"full"}
                color={'wt'}
                className="btn sm-clicky"
              /> */}

                <SeccondaryOutlineButton
                  w={"180px"}
                  h={"50px"}
                  fontSize={"18px !important"}
                  flexShrink={0}
                  mt={14}
                >
                  Login
                </SeccondaryOutlineButton>
              </VStack>
            </Box>

            <Image
              src="/img/bgNavMobile.webp"
              position={"absolute"}
              bottom={0}
              zIndex={1}
            />
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  if (sw < 920)
    return (
      <HStack h="72px" justify={"space-between"}>
        <Image h="43px" src={sw < 380 ? "/logoOnly.webp" : logo} />

        <MobileDrawer />
      </HStack>
    );

  return (
    <HStack h="96px" justify={"space-between"}>
      <Image h="43px" src={logo} />

      <HStack gap={4}>
        {/* <ColorModeSwitcher
          borderRadius={"full"}
          color={color}
          className="btn sm-clicky"
        /> */}

        {headerNav.map((n, i) => (
          <Text as={Link} key={i} className="ns" px={4}>
            {n.name}
          </Text>
        ))}

        <PrimaryOutlineButton fontWeight={400}>Login</PrimaryOutlineButton>
      </HStack>
    </HStack>
  );
}
