import { Container } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export default function Navbar(){
    return (
      <>
        <Container
          boxShadow="lg"
          p="4"
          rounded="md"
          bg="white"
          maxW="100%"
          px={30}
        >
          <Flex>
            <Square p="4" bg="green.400">
              搜尋
            </Square>
            <Spacer />
            <Box p="4">夠了喔，小農</Box>
            <Spacer />
            <Circle p="4" bg="green.400">
              登入/註冊
            </Circle>
          </Flex>
          <Box h={30} />
          <Center>
            <Flex>
              <Box p="4">在地小農</Box>
              <Spacer />
              <Box p="4">購夠農產</Box>
              <Spacer />
              <Box p="4">社群小農</Box>
            </Flex>
          </Center>
        </Container>
      </>
    );
}