import React from "react";
import { Box, Center, useColorModeValue, Text } from "@chakra-ui/react";
import Header from "./Components/Header"
import MainCard from "./Components/MainCard"

export default function Layout() {
    const textClr = useColorModeValue("textColor.100", "textColor.900");
    const prices = ["6.5", "8.5", "10.5"];
    const sizes = ["300г", "400г", "500г"];
    const title = "Чикен";
    const image = "shava1.png";

    return (
        <Center>
            <Header />

            <Box w="full" maxW="container.md" px={8} color={textClr} css={`column-count: 2;`} gap={6} mt={28}>
                <Box mb={6}>
                    <Text fontWeight="bold" fontSize="clamp(10px, 7.2vw, 56px)" lineHeight="clamp(10px, 7.2vw, 56px)">
                        Найдено 23 донера
                    </Text>
                </Box>

                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
                <MainCard prices={prices} sizes={sizes} title={title} image={image} />
            </Box>
        </Center>
    );
}
