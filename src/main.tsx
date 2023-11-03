import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";
import { HeroesProvider } from "./contexts/heroes/heroes.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HeroesProvider>
        <Routes />
      </HeroesProvider>
    </ChakraProvider>
  </React.StrictMode>
);
