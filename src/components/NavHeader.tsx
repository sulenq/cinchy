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
  const logo = useColorModeValue("/logo.png", "/logoDarkMode.png");
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

        <Drawer isOpen={true} onClose={onClose} placement="right">
          <DrawerOverlay />

          <DrawerContent>
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

            <Box bg={"p.500"} position={"relative"} overflow={"auto"}>
              <VStack
                minH={"100vh"}
                justify={"center"}
                overflow={"auto"}
                gap={6}
                p={"50px"}
              >
                <Image
                  h="43px"
                  src={"/logoDarkMode.png"}
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
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  if (sw < 920)
    return (
      <HStack h="72px" justify={"space-between"}>
        <Image h="43px" src={sw < 380 ? "/logoOnly.png" : logo} />

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

        <PrimaryOutlineButton>Login</PrimaryOutlineButton>
      </HStack>
    </HStack>
  );
}
