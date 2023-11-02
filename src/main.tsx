import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
