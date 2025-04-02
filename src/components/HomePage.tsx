import { Box, Container, Heading, Circle } from '@chakra-ui/react'
import { keyframes } from "@emotion/react"

const runTrack = keyframes({
  '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
  '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' }
})

const HomePage = () => {
  const runAnimation = `${runTrack} 8s linear infinite`

  return (
    <Box bg="white" minH="100vh">
      <Container maxW="container.xl" py={20}>
        <Box position="relative" height="600px">
          {/* Track Design - Outer oval */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="80%"
            height="400px"
            border="2px solid"
            borderColor="gray.200"
            borderRadius="full"
          />
          
          {/* Track Design - Inner oval */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="60%"
            height="300px"
            border="2px solid"
            borderColor="gray.200"
            borderRadius="full"
          />

          {/* Running Dots */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            width="0"
            height="0"
            transform="translate(-50%, -50%)"
          >
            <Circle
              size="12px"
              bg="black"
              position="absolute"
              animation={runAnimation}
            />
            <Circle
              size="12px"
              bg="black"
              position="absolute"
              animation={runAnimation}
              style={{
                animationDelay: "-4s"
              }}
            />
          </Box>

          {/* Centered Heading */}
          <Heading
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            textAlign="center"
            letterSpacing="tight"
            color="black"
            zIndex={1}
          >
            Track the Miles,<br />
            Own the Journey
          </Heading>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePage