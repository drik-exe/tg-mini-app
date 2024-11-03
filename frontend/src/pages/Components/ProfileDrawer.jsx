import React from "react";
import {
    Flex,
    Text,
    Center,
    Image,
    Box,
} from "@chakra-ui/react";

export default function ProductDrawer() {
    return (
        <Center>
            <Flex
                w="88%"
                mt={6}
                fontFamily="Montserrat"
                flexDirection="column"
                alignItems="center"
            >
                <Text
                    fontWeight="extrabold"
                    fontSize="clamp(20px, 10vw, 60px)"
                    textAlign="center"
                    mb={3}
                >
                    Профиль
                </Text>

                <Box position="relative">
                    <Image src="Profile.png" borderRadius="full" />
                </Box>

                <Text
                    fontWeight="extrabold"
                    fontSize="clamp(20px, 10vw, 60px)"
                    lineHeight="clamp(20px, 12vw, 70px)"
                    textAlign="center"
                    my={3}
                >
                    Александр
                    <br />
                    Лучинович
                </Text>

                <Text
                    fontWeight="semibold"
                    fontSize="clamp(20px, 5vw, 30px)"
                    mb={6}
                >
                    +375 (33) 910-88-36
                </Text>
            </Flex>
        </Center>
    );
}
