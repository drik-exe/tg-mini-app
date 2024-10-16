import {
    ChakraProvider,
    extendTheme,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Menu from "./pages/Menu.jsx";
import Basket from "./pages/Basket.jsx";
import Profile from "./pages/Profile.jsx";

const theme = extendTheme({
    colors: {
        bgColor: {
            100: "#F9F9F9",
            900: "#252525",
        },
        boxColor: {
            100: "#FFFFFF",
            900: "#1A1A1A",
        },
        textColor: {
            100: "#252525",
            900: "#F9F9F9",
        },
        accentColor: {
            100: "#FFCF0D",
            900: "#FFCF0D",
        }
    },
    shadows: {
        light: "5px 5px 10px rgba(0, 0, 0, 0.03), -5px -5px 10px rgba(255, 255, 255, 1)",
        dark: "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(26, 26, 26, 1)",
        selectLight: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        selectDark: "0xp 5px 10px rgba(0, 0, 0, 0.05)",
    },
});

export default function App() {
    const bgColor = useColorModeValue("bgColor.100", "bgColor.900");

    return (
        <ChakraProvider theme={theme}>
            <Box bg={bgColor} minHeight="100vh" w={"100%"} fontFamily="Montserrat">
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Menu />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="basket" element={<Basket />} />
                        </Route>
                    </Routes>
                </Router>
            </Box>
        </ChakraProvider>
    );
}
