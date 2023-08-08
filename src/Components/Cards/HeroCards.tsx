import { Box, Flex, VStack, Text, Button, Icon, Image } from "@chakra-ui/react"
import WrapperComponent from "../HOC/Hoc"
import { width } from "../../styles/styles";
import { FiArrowUpRight } from "react-icons/fi";
import Vector from "../../assets/Vector.png"


const HeroCards = () => {
    return (

        <Flex
            width= {width}
            h='350'
            bg="white"

            marginTop="90px"
            justifyContent="space-between"
            borderRadius="3xl"
            borderWidth="2px"
            borderColor="color.secondary"
            marginBottom="20"

        >


            <VStack
                w="60%"
                padding={"60px"}
                alignItems="start"
                spacing={6}

            >

                <Text
                    fontFamily="title"
                    fontSize="3xl"
                    width="100%"
                    textAlign="start"
                    color="color.secondary"
                    fontWeight="bold"
                >Fundamentals <Text >For crypto wallet </Text></Text>
            
                <Text
                    fontFamily="subtitle"
                    fontSize="md"
                    color="blackAlpha.700"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In excepturi,
                    inventore cupiditate ex ducimus, sapiente distinctio aperiam.
                </Text>



                <Button
                    fontFamily="title"
                    borderRadius="full"
                    borderColor="transparent"
                    borderWidth="1px"
                    borderStyle="solid"
                    
                    bg="transparent"
                    padding="0"
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

                    Get started now

                </Button>


            </VStack>

            <Box
                w="50%"
                h="100%"
                position="relative"
                backgroundImage={Vector}
                 bgPos="center"
                 bgRepeat="no-repeat"
                 bgSize="contain"
            >
            {/* <Image  position="absolute" w="100%" src={} /> */}

            </Box>



        </Flex>


    )



}

export default WrapperComponent(HeroCards);
