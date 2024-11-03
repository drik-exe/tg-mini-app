import React from "react";
import {
    Flex,
    Text,
    Center,
    Container,
    Button,
} from "@chakra-ui/react";

export default function ConfirmOrderDrawer() {
    const accentColor = "accentColor.100";

    const basket = "9.5";
    const [iBasket, dBasket] = basket.split(".");

    return (
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
                <Flex direction="column" gap={4} w="full">
                    {/* <Select
                        placeholder='Выберите адрес'
                        w="full"
                    >
                        <option value='option1'>Минск, Крутая улица, 13</option>
                        <option value='option2'>Минск, Крутая улица, 14</option>
                        <option value='option3'>Минск, Крутая улица, 15</option>
                    </Select>

                    <Input placeholder='Имя' />

                    <InputGroup>
                        <InputLeftAddon>+375</InputLeftAddon>
                        <Input type='tel' placeholder='Номер телефона' />
                    </InputGroup>

                    <Select
                        placeholder='Через сколько заберёте'
                        w="full"
                    >
                        <option value='option1'>5 мин</option>
                        <option value='option2'>10 мин</option>
                        <option value='option3'>15 мин</option>
                        <option value='option4'>20 мин</option>
                        <option value='option5'>25 мин</option>
                        <option value='option6'>30 мин</option>
                    </Select>

                    <Select
                        placeholder='Способ оплаты'
                        w="full"
                    >
                        <option value='option1'>Картой</option>
                        <option value='option2'>Наличными</option>
                    </Select>

                    <Textarea placeholder='Комментарий к заказу' resize="none" /> */}
                </Flex>
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
    );
}
