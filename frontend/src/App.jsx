import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes"
import Layout from "./pages/Layout.jsx";

export default function App() {
    return (
        <ChakraProvider value={system}>
            <ThemeProvider>
                <Box minHeight="100vh" w="100%" fontFamily="Montserrat" bg="bgColor.100">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Layout />} />
                        </Routes>
                    </Router>
                </Box>
            </ThemeProvider>
        </ChakraProvider>
    );
}
