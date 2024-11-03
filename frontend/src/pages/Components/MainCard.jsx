import React from "react";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Flex,
    CardFooter,
    Box,
    useDisclosure
} from "@chakra-ui/react";
import ProductDrawer from "./ProductDrawer"
import MainDrawer from "./MainDrawer"

const MainCard = ({ product }) => {
    const boxColor = "boxColor.100"; // Replace with your theme's box color
    const textColor = "textColor.100"; // Replace with your theme's text color
    const accentColor = "accentColor.100"; // Replace with your theme's accent color

    const { isOpen, onOpen, onClose } = useDisclosure();

    const formatPrice = (price) => {
        const [integer, decimal] = price.split(".");
        return { integer, decimal };
    };

    return (
        <>
            <Card 
                borderRadius={26} 
                w="full" 
                mb={6} 
                css={`break-inside: avoid;`} 
                boxShadow="light" 
                backgroundColor={boxColor} 
                cursor="pointer"
                onClick={onOpen} 
                color={textColor}
            >
                <CardBody p={0}>
                    <Image
                        src={product.image}
                        borderRadius={26}
                        pos="absolute"
                    />
                    <Box h="clamp(100px, calc(44vw - 40px), 300px)" />
                    <Stack>
                        <Text
                            fontWeight="bold"
                            fontSize="clamp(12px, 3.5vw, 26px)"
                            textAlign="center"
                            h="clamp(4px, 1vw, 16px)"
                        >
                            Донер
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize="clamp(20px, 6vw, 48px)"
                            textAlign="center"
                            h="clamp(10px, 8vw, 66px)"
                        >
                            {product.title}
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter p={3}>
                    <Flex w="full" justifyContent="space-around">
                        {product.prices.map((price, index) => {
                            const { integer, decimal } = formatPrice(price);

                            return (
                                <Flex key={index} flexDirection="column">
                                    <Text
                                        opacity="0.5"
                                        fontSize="clamp(10px, 2.5vw, 16px)"
                                        textAlign="center"
                                        h="clamp(10px, 1vw, 16px)"
                                    >
                                        {product.sizes[index]}
                                    </Text>
                                    <Text
                                        fontWeight="bold"
                                        fontSize="clamp(18px, 6vw, 42px)"
                                        textAlign="center"
                                    >
                                        {integer}
                                        <Text as="span" fontSize="clamp(10px, 3vw, 22px)">
                                            .{decimal}
                                            <Text as="span" color={accentColor}>
                                                р
                                            </Text>
                                        </Text>
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Flex>
                </CardFooter>
            </Card>

            <MainDrawer isOpen={isOpen} onClose={onClose} children={
                <ProductDrawer product={product} />
            } />
        </>
    );
};

export default MainCard;
