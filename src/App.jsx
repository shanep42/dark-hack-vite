import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';

function App() {

  return (
    <Box
      bg='gray.900'
      color='white'
      height='100vh'
      paddingTop={130}
    >
      <Container maxW='3x1' centerContent>
        <Header />
      </Container>
    </Box>
  )
}

export default App
