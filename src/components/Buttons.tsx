import { Button } from "@chakra-ui/react";

const PrimaryOutlineButton = (props: any) => (
  <Button
    {...props}
    border={"1px solid var(--p500)"}
    variant={"ghost"}
    className="clicky"
    _hover={{ bg: "var(--p200a)" }}
    color={"p.500"}
  >
    {props.children}
  </Button>
);

const SeccondaryOutlineButton = (props: any) => (
  <Button
    {...props}
    border={"1px solid var(--a500)"}
    variant={"ghost"}
    className="clicky"
    _hover={{ bg: "var(--a200a)" }}
    color={"a.500"}
  >
    {props.children}
  </Button>
);

export { PrimaryOutlineButton, SeccondaryOutlineButton };
