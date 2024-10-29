import React from "react";
import {
    Flex,
    Text,
    useColorModeValue,
    Center,
    Container,
    Button,
} from "@chakra-ui/react";

export default function ConfirnOrderDrawer() {
    const accentColor = useColorModeValue("accentColor.100", "accentColor.900");

    const productInfo = {
        title: "Чикен",
        sizes: ["300г", "400г", "500г"],
        prices: ["7.5", "9.5", "11.5"],
        image: "shava1.png",
        selectedIndex: 1,
    };

    const selectedPrice = productInfo.prices[productInfo.selectedIndex];

    const basket = (parseFloat(selectedPrice) * amount).toString();
    const [iBasket, dBasket] = basket.split(".");
    return (
        <>
            <Center>
                <Flex
                    w="88%"
                    mt={10}
                    fontFamily="Montserrat"
                    flexDirection="column"
                    alignItems="center"
                    mb={20}
                >
                    <Text
                        fontWeight="extrabold"
                        fontSize="clamp(20px, 10vw, 60px)"
                        lineHeight="clamp(20px, 10vw, 60px)"
                        textAlign="center"
                        mb={6}
                    >
                        Самовывоз
                    </Text>
                </Flex>

                <Container variant="bot-container">
                    <Flex gap={8} alignItems="center">
                        <Text
                            fontWeight="extrabold"
                            fontSize="clamp(18px, 12vw, 62px)"
                            lineHeight="clamp(18px, 10vw, 42px)"
                            textAlign="center"
                            fontFamily="Montserrat"
                        >
                            {iBasket}
                            <Text as="span" fontSize="clamp(10px, 7vw, 32px)">
                                {dBasket !== undefined ? "." + dBasket : ""}
                                <Text as="span" color={accentColor}>
                                    р
                                </Text>
                            </Text>
                        </Text>

                        <Button variant="main-button">Оформить</Button>
                    </Flex>
                </Container>
            </Center>
        </>
    );
}
