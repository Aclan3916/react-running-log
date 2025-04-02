import { Box, Flex, Spacer, Container } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" bg="white" py={4}>
      <Container maxW="container.lg">
        <Flex align="center">
          <RouterLink to="/">
            <Box
              fontSize="lg" 
              fontWeight="bold"
              color="black"
              _hover={{ color: 'gray.700' }}
              mr={8}
            >
              RUNNING LOG
            </Box>
          </RouterLink>
          <Spacer />
          <Flex gap={8}>
            <RouterLink to="/add-run">
              <Box
                color="gray.700"
                fontWeight="medium"
                _hover={{ color: 'black' }}
                letterSpacing="wide"
              >
                ADD RUN
              </Box>
            </RouterLink>
            <RouterLink to="/activities">
              <Box
                color="gray.700"
                fontWeight="medium"
                _hover={{ color: 'black' }}
                letterSpacing="wide"
              >
                ACTIVITIES
              </Box>
            </RouterLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation