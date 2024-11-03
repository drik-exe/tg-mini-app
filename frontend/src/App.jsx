import React from "react";
import { Box } from "@chakra-ui/react";
import { theme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import { Provider } from "./components/ui/provider";

export default function App() {
    console.log(theme);

    return (
        <Provider value={theme}>
            <Box minHeight="100vh" w="100%" fontFamily="Montserrat">
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />} />
                    </Routes>
                </Router>
            </Box>
        </Provider>
    );
}
