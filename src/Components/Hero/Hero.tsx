import { Box, Flex, Text, HStack, Button, Icon } from "@chakra-ui/react"
import { width } from "../../styles/styles"
import { FiArrowUpRight } from "react-icons/fi"
import WrapperComponent from "../HOC/Hoc"



const Hero = () => {


    return (
        <>
            <Flex
                flexDirection="column"
                marginTop={10}
                width={width}

            >

                <Flex
                    justifyContent="space-between"

                >
                    <Box
                        width="730px"
                    >
                        <Text
                            textAlign="start"
                            fontFamily="title"
                            fontWeight="bold"
                            fontSize="7xl"
                            color="black  " > The best lighting </Text>
                        <Text
                            textAlign="end"
                            fontFamily="title"
                            fontWeight="bold"
                            fontSize="7xl"
                            color="black  " >        crypto trading</Text>

                    </Box>


                    <Flex
                        width="340px"
                        padding={1}
                        justifyContent="space-around"
                        alignItems="center"
                        flexDir="column"
                    >

                        <Text fontFamily="subtitle"
                            fontSize="md"
                            color="blackAlpha.700"
                            textAlign="justify"
                        >

                            Trusteds by millions since 2011 with over $1 Trillion in crypto transaction

                        </Text>

                        <HStack>
                            <Button
                                fontFamily="title"
                                borderRadius="full"
                                borderColor="color.secondary"
                                color="white"
                                borderWidth="1px"
                                borderStyle="solid"
                                bg="color.secondary"
                                padding="6"
                                _hover={{
                                    bg: "transparent",
                                    borderColor: "color.secondary",
                                    color: "black"
                                }}
                            >
                                Get started

                            </Button>



                            <Box


                            >



                            </Box>
                            <Button
                                fontFamily="title"
                                borderRadius="full"
                                borderColor="transparent"
                                borderWidth="1px"
                                borderStyle="solid"
                                bg="transparent"
                                padding="6"
                                _hover={{

                                    color: "none"
                                }}
                                _active={{
                                    bg: "transparent"
                                }}

                            >
                                <Icon marginRight={5} borderRadius="full"
                                    borderColor="color.secondary"
                                    width="40px"
                                    bg="transparent"
                                    height="40px"
                                    padding={2}
                                    color="black"
                                    borderWidth="1px"
                                    _hover={{
                                        bg: "color.secondary",
                                        color: "white"
                                    }}
                                    transition={"all .3s ease"}

                                    as={FiArrowUpRight} />

                                Explore

                            </Button>




                        </HStack>
                    </Flex>


                </Flex>


            </Flex>

        </>
    )
}


export default WrapperComponent(Hero);