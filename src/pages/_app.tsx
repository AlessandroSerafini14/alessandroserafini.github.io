import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import ExperiencesProvider from "#context/experiences";

import { theme } from "#constants";

export default function App({ Component, pageProps }: AppProps) {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 ${theme.spacing.s600} 0;
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
      <Head>
        <title>Alessandro Serafini</title>
        <meta
          name="description"
          content="I am a Front End developer with industry experience building web applications. I specialize in React, Typescript and Javascript and have professional experience working with React Native, but I also have experience working with Angular and Vue."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="app-version" content={process.env.VERSION} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ExperiencesProvider>
          <Component {...pageProps} />
        </ExperiencesProvider>
      </ThemeProvider>
    </>
  );
}
