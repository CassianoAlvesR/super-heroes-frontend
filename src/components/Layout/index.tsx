import { Grid, GridItem, useColorMode } from "@chakra-ui/react"
import { Nav } from "./Nav"
import { Outlet } from "react-router-dom"
import { useLayoutEffect } from "react"


export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useLayoutEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [])


  return (
    <Grid templateColumns="1fr" templateRows="80px 1fr 70px" w="100%" h="100%">
      <GridItem w='100%' h='100%'>
        <Nav />
      </GridItem>
      <GridItem w='100%' h='100%' overflowY='auto'>
        <Outlet />
      </GridItem>
      <GridItem w='100%' h='100%'>
        <h1>Rodape</h1>
      </GridItem>
    </Grid>
  )
}
