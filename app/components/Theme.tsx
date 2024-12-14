'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from 'react';

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: "3%",
          textAlign: "center",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          color: theme.palette.text.primary,
          textAlign: "center",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: ({ theme }) => ({
          ":before": {
            borderBottomColor: theme.palette.text.disabled,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& fieldset": {
            borderColor: theme.palette.text.disabled,
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        margin: "normal",
      },
    },
  },
});

export default function Theme(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      { props.children }
    </ThemeProvider>
  );
}
