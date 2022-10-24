import { Box } from "@chakra-ui/react"


const ChakraBox = () => {
    return (
        <div>
           {/*  // m={2} refers to the value of `theme.space[2]` */}
<Box m={7}>Tomato</Box>

<Box maxW="960px" mx="auto" />
<Box m={[2, 3]} />
        </div>
    );
}

export default ChakraBox;
