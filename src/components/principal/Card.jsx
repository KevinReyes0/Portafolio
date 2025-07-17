import { Box, Heading, Text, Link, Stack } from '@chakra-ui/react';

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w="full"
            border="none"
            borderRadius="md"
            p={5}
            bgGradient="linear(to-br, rgba(255,255,255,0.05), rgba(255,255,255,0.1))"
            boxShadow="sm"
            backdropFilter="blur(6px)"
            _hover={{ boxShadow: 'md', transform: 'scale(1.02)' }}
            transition="all 0.3s ease-in-out"
        >
            <Stack align="start" spacing={2}>
                {icon}
                <Heading size="md" color="white">
                    {heading}
                </Heading>
                <Text color="whiteAlpha.800">{description}</Text>
            </Stack>
        </Box>
    );
};

export default Card;

