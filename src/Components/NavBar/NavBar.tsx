import { Box, Flex, Text, HStack, Button } from "@chakra-ui/react"
import { paddingX } from "../../styles/styles"


interface TitleItemData {
    id: number;
    TitleName: string;
    url: string;
}

const TitleItemData: TitleItemData[] = [
    {
        id: 1,
        TitleName: "Wallet",
        url: "",
    },
    {
        id: 2,
        TitleName: "Exchange",
        url: "",
    },
    {
        id: 3,
        TitleName: "Explorer",
        url: "",
    },
    {
        id: 4,
        TitleName: "Institutional",
        url: "",
    }
]

const NavBar = () => {
    return (
        <>
            <Flex

                bg="color.primary"
                paddingX={paddingX}
                paddingY={5}
                justifyContent="space-between"
            >
                <HStack spacing={10}>
                    <Box
                        width="80px"
                        height="100%"
                        padding={1}

                    >
                        <Text fontFamily="title" fontWeight="bold" fontSize="3xl" >LOGO</Text>
                    </Box>
                    <HStack spacing={7}
                        justifySelf="flex-start"
                    >
                        {TitleItemData.map(({ id, TitleName }) => (
                            <Text key={id} fontFamily="subtitle" color="blackAlpha.700" >{TitleName}</Text>

                        ))}


                    </HStack>
                </HStack>



                <HStack>
                    <Button
                        fontFamily="title"
                        padding="6"
                        borderWidth="1px"
                        borderColor="transparent"
                        borderRadius="full"
                        bg="transparent"
                        _hover={{
                            bg: "transparent",
                            // borderColor : "color.secondary",
                            // borderWidth: "1px",
                            // borderRadius: "full",
                            // borderStyle:"solid"
                        }}
                    >
                        Log in
                    </Button>

                    <Button
                        fontFamily="title"
                        borderRadius="full"
                        borderColor="black"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="transparent"
                        padding="6"
                        _hover={{
                            bg: "color.secondary",
                            borderColor: "color.secondary",
                            color: "white"
                        }}
                    >
                        Sign up

                    </Button>
                </HStack>

            </Flex>
        </>
    )
}

export default NavBar