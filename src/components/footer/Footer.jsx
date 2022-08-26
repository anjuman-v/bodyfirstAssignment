import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
 
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('rgb(158, 201, 66)')}
        color={useColorModeValue('white')}>
        <Container as={Stack} maxW={'6xl'} py={10} justifyContent={'space-between'}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={'10rem'}>
            <Stack align={'flex-start'}>
             
              <Link href={'#'}>Overview</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                
              </Stack>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
             
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            
          </SimpleGrid>
        </Container>
        
      </Box>
    );
  }