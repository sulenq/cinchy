import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  colors: {
    p: {
      50: "#f1f8ff",
      100: "#C3F4DB",
      200: "#8CEAC3",
      300: "#4DC19C",
      400: "#21846D",
      500: "#00332C",
      600: "#002B29",
      700: "#002224",
      800: "#00191D",
      900: "#001218",
    },
    a: {
      50: "#f1f8ff",
      100: "#FEF5D3",
      200: "#FEE9A8",
      300: "#FDD87D",
      400: "#FBC85D",
      500: "#FAAE28",
      600: "#D78C1D",
      700: "#B36E14",
      800: "#90520C",
      900: "#773E07",
    },
    ap: {
      50: "#5281e1",
      100: "#5281e1",
      200: "#5281e1",
      300: "#5281e1",
      400: "#5281e1",
      500: "#5281e1",
      600: "#5281e1",
      700: "#5281e1",
      800: "#5281e1",
      900: "#5281e1",
    },
    bt: "#00332C",
    wt: "#eeeeee",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "white",
        color: props.colorMode === "dark" ? "wt" : "bt",
      },
    }),
  },

  components: {
    Drawer: {
      baseStyle: (props) => ({
        dialog: {
          bg: "transparent",
          color: props.colorMode === "dark" ? "wt" : "wt",
          boxShadow: "none",
        },
      }),
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "black" : "white",
          color: props.colorMode === "dark" ? "wt" : "bt",
          boxShadow: "none",
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === "dark" ? "#050505cc" : "#ffffffcc",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--divider)",
          p: 0,
          overflow: "hidden",
        },
        item: {
          bg: "transparent",
          _hover: { bg: "var(--divider)" },
        },
      }),
    },

    Button: {
      baseStyle: {
        fontWeight: 700,
        borderRadius: "4px",
      },
    },

    Input: {
      baseStyle: (props) => ({
        field: {
          _autofill: {
            boxShadow:
              props.colorMode === "dark"
                ? "0 0 0px 1000px #050505 inset"
                : "0 0 0px 1000px #ffffff inset",
            border: "2px solid var(--divider) !important",
          },
        },
      }),
    },

    Checkbox: {
      baseStyle: (props) => ({
        icon: {
          color: "wt",
        },
      }),
    },

    Tooltip: {
      baseStyle: {
        bg: "p.500",
        color: "w",
        "--popper-arrow-bg": "#5281e1",
      },
    },
  },
});
