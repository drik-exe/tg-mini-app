import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                bgColor: {
                    100: { value: "#F9F9F9" },
                    900: { value: "#252525" },
                },
                boxColor: {
                    100: { value: "#FFFFFF" },
                    900: { value: "#1A1A1A" },
                },
                textColor: {
                    100: { value: "#252525" },
                    900: { value: "#F9F9F9" },
                },
                accentColor: {
                    100: { value: "#FFCF0D" },
                    900: { value: "#FFCF0D" },
                },
                inputColor: {
                    100: { value: "#F5F5F5" },
                    900: { value: "#F5F5F5" },
                },
            },
            shadows: {
                light: { value: "5px 5px 10px rgba(0, 0, 0, 0.03), -5px -5px 10px rgba(255, 255, 255, 1)" },
                dark: { value: "5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(26, 26, 26, 1)" },
                selectLight: { value: "0px 5px 10px rgba(0, 0, 0, 0.05)" },
                selectDark: { value: "0px 5px 10px rgba(0, 0, 0, 0.05)" },
                botContainerLight: { value: "0px -4px 20px rgba(0, 0, 0, 0.05)" },
                buttonLight: { value: "0px 2px 20px rgba(255, 207, 13, 0.7)" },
            },
        },
        components: {
            Button: {
                variants: {
                    "main-button": {
                        bg: { base: "#FFCF0D" },
                        color: { base: "#252525" },
                        borderRadius: { base: "16px" },
                        h: { base: "14" },
                        fontSize: { base: "20px" },
                        fontWeight: { base: "bold" },
                        boxShadow: { base: "buttonLight" },
                        fontFamily: { base: "Montserrat" },
                        _active: {
                            outline: { value: "none" },
                            boxShadow: { value: "none" },
                        },
                    },
                },
            },
            Container: {
                variants: {
                    "bot-container": {
                        bg: { base: "boxColor.100" },
                        w: { base: "full" },
                        maxW: { base: "container.md" },
                        px: { base: "8" },
                        py: { base: "4" },
                        boxShadow: { base: "botContainerLight" },
                        zIndex: { base: "10" },
                        pos: { base: "fixed" },
                        bottom: { base: "0" },
                        borderTopRadius: { base: "26px" },
                    },
                },
            },
        },
        styles: {
            global: {
                "*": {
                    WebkitTapHighlightColor: { value: "transparent" },
                },
                "*:focus": {
                    outline: { value: "none" },
                    boxShadow: { value: "none" },
                },
            },
        },
    },
});
