import type { AppProps } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import ExperiencesProvider from "#context/experiences";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    spacing: {
      s100: "8px",
      s200: "16px",
      s300: "24px",
      s400: "32px",
      s500: "40px",
      s600: "48px",
      s700: "56px",
      s800: "64px",
      s900: "72px",
    },
    size: {
      layoutGutter: "24px",
      sidebarWidthMobile: "256px",
      sidebarWidthTablet: "220px",
      sidebarWidthDesktop: "296px",
    },
    breakpoint: {
      mobile: "768px",
      tablet: "544px",
      desktop: "1012px",
    },
    color: {
      headerBg: "#f6f8fa",
      canvasDefault: "#ffffff",
      borderDefault: "#d0d7de",
      accentSubtle: "#ddf4ff",
      fgMuted: "#57606a",
      iconDirectory: "#54aeff",
      fgDefault: "#24292f",
      accentFg: "#0969da",
      neutralMuted: "rgba(175,184,193,0.2)",
      counterBorder: "rgba(0,0,0,0)",
      successFg: "#1a7f37",
      successEmphasis: "#2da44e",
      borderMuted: "hsla(210,18%,87%,1)",
      canvasSubtle: "#f6f8fa",
      headerBorder: "hsla(210,18%,87%,1)",
      actionListItemDefaultHoverBg: "rgba(208,215,222,0.32)",
      primerBorderActive: "#fd8c73",
      btnText: "#24292f",
      btnBg: "#f6f8fa",
      btnBorder: "rgba(27,31,36,0.15)",
      btnShadow: "0 1px 0 rgba(27,31,36,0.04)",
      btnInsetShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
      btnHoverBg: "#f3f4f6",
      btnHoverBorder: "rgba(27,31,36,0.15)",
    },
  };

  const GlobalStyle = createGlobalStyle`
    body {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      color: ${theme.color.btnText};
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }

    a {
      color:inherit;

      &:not(:hover) {
        text-decoration: none;
      }
      
      &:hover {
        color: ${theme.color.accentFg}
      }
    }
`;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ExperiencesProvider>
          <Component {...pageProps} />
        </ExperiencesProvider>
      </ThemeProvider>
    </>
  );
}
