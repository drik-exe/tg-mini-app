import React, { useState } from "react";
import { Box, Flex, IconButton, Input, useDisclosure } from "@chakra-ui/react";
import { InputGroup } from "../../components/ui/input-group";
import icons from "../../icons";
// import ProfileDrawer from "./ProfileDrawer";
// import MainDrawer from "./MainDrawer";

const Header = () => {
    const boxColor = "boxColor.100";
    const textColor = "textColor.100";
    const bgColor = "bgColor.100";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setInputValue("");
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <Box
                w="100%"
                h="16"
                backgroundColor={bgColor}
                pos="fixed"
                top="0"
                zIndex="1"
            />

            <Box
                as="header"
                pos="fixed"
                top="8"
                w="100%"
                maxW="container.md"
                px="8"
                zIndex="2"
            >
                <Flex
                    p="2"
                    boxShadow="light"
                    bgColor={boxColor}
                    color={textColor}
                    justify="space-between"
                    align="center"
                    borderRadius="16"
                >
                    <IconButton
                        variant="ghost"
                        size="md"
                        icon={icons.burger({ color: textColor })}
                        opacity={isFocused ? "0" : "1"}
                        userSelect={isFocused ? "none" : "auto"}
                        transition="opacity 0.3s ease-in-out"
                    />

                    <InputGroup
                        w={isFocused ? "100%" : "140px"}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        transition="width 0.5s ease-in-out"
                    >
                        {/* <InputLeftElement pointerEvents="none">
                            {icons.search({ color: textColor })}
                        </InputLeftElement> */}

                        <Input
                            type="text"
                            placeholder="Найти"
                            value={inputValue}
                            onChange={handleChange}
                            bgColor={boxColor}
                            color={textColor}
                            _placeholder={{ color: "gray.500" }}
                            borderRadius="16"
                        />
                    </InputGroup>

                    <IconButton
                        variant="ghost"
                        size="md"
                        icon={icons.profile({ color: textColor })}
                        onClick={onOpen}
                    />
                </Flex>
            </Box>

            {/* <MainDrawer isOpen={isOpen} onClose={onClose}>
                <ProfileDrawer onClose={onClose} />
            </MainDrawer> */}
        </>
    );
};

export default Header;
