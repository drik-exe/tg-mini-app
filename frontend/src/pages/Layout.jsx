import React from "react";
import {
    Box,
    Center,
    Text,
    Button,
    Container,
    Flex,
    useDisclosure,
} from "@chakra-ui/react";
import Header from "./Components/Header";
import MainCard from "./Components/MainCard";
import MainDrawer from "./Components/MainDrawer";
import BasketDrawer from "./Components/BasketDrawer";
import ConfirnOrderDrawer from "./Components/ConfirnOrderDrawer";

export default function Layout() {
    const textColor = "textColor.100"; 
    const prices = ["6.5", "8.5", "10.5"];
    const sizes = ["300г", "400г", "500г"];
    const title = "Чикен";
    const image = "shava1.png";

    const { isOpen: isBasketOpen, onOpen: onBasketOpen, onClose: onBasketClose } = useDisclosure();
    const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();

    const handleOrderClick = () => {
        onBasketClose(); 
        onConfirmOpen(); 
    };

    const productInfo = {
        title,
        sizes,
        prices,
        image,
    };

    const productInfo2 = {
        title: "Не чикен",
        sizes: ["300г", "400г", "500г"],
        prices: ["7.5", "9.5", "11.5"],
        image: "shava1.png",
    };

    return (
        <>
            <Center>
                <Header />
                <Box
                    w="full"
                    maxW="container.md"
                    px={8}
                    color={textColor}
                    css={`column-count: 2;`}
                    gap={6}
                    mt={28}
                    mb="105px"
                >
                    <Box mb={6}>
                        <Text
                            fontWeight="bold"
                            fontSize="clamp(10px, 7.2vw, 56px)"
                            lineHeight="clamp(10px, 7.2vw, 56px)"
                        >
                            Найдено 23 донера
                        </Text>
                    </Box>

                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                    <MainCard product={productInfo} />
                    <MainCard product={productInfo2} />
                </Box>

                <Container variant="bot-container">
                    <Flex>
                        <Button variant="main-button" onClick={onBasketOpen}>
                            Корзина
                        </Button>
                    </Flex>
                </Container>
            </Center>

            <MainDrawer isOpen={isBasketOpen} onClose={onBasketClose}>
                <BasketDrawer onDrawerClose={handleOrderClick} />
            </MainDrawer>

            <MainDrawer isOpen={isConfirmOpen} onClose={onConfirmClose}>
                <ConfirnOrderDrawer />
            </MainDrawer>
        </>
    );
};
