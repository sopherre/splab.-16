import { createTheme } from "@mui/material";
import * as tokens from "../tokens/data";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F5F5F5",
    },
    secondary: {
      main: "#2196F3",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      secondary: "rgba(55, 53, 47, 0.65)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiLink: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          padding: "0 !important",
        },
        root: {
          "> div": {
            padding: "0 !important",
          },
        },
        hasClearIcon: {
          padding: "0 !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: 0,
        },
        input: {
          paddingTop: 4,
          paddingBottom: 4,
          paddingRight: 8,
          paddingLeft: 8,
          fontSize: 12,
          alignItems: "center",
          "&::placeholder": {
            color: "text",
          },
        },
      },
      variants: [
        {
          props: { name: "search" },
          style: {
            width: "100%",
            borderRadius: 50,
            border: "solid 1px rgba(55, 53, 47, 0.65)",
            backgroundColor: "rgba(238, 238, 238, 1)",
            paddingLeft: 8,
          },
        },
      ],
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary",
        size: "small",
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h2",
        },
      },
    },
  },
  typography: {
    h1: tokens.TypographyH1,
    h2: tokens.TypographyH2,
    h3: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitle1: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "20px",
    },
    subtitle2: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
    },
    body1: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "16px",
    },
    body2: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "16px",
      color: "rgba(0, 0, 0, 0.6)",
    },
    button: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
    },
    caption: {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: 10.5,
      fontWeight: 400,
      lineHeight: "12px",
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
});
