import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';

function StatsCardWithImage({ title, iconSrc, link }) {
    return (
        <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
            <Box
                maxW={{ base: 'full', md: '400px' }}
                w="full"
                borderRadius="xl"
                p={5}
                bgGradient="linear(to-br, rgba(255,255,255,0.05), rgba(255,255,255,0.1))"
                boxShadow="sm"
                backdropFilter="blur(6px)"
                _hover={{ boxShadow: 'md', transform: 'scale(1.02)' }}
                transition="all 0.3s ease-in-out"
                border="1px solid" 
                borderColor="gray.200"
            >
                <Flex align="center" gap={4}>
                    {/* Imagen */}
                    <Image
                        src={iconSrc}
                        alt={`${title} logo`}
                        boxSize="40px"
                        objectFit="contain"
                    />
                    
                    {/* Texto */}
                    <Text
                        textTransform={"uppercase"}
                        color={"blue.400"}
                        fontWeight={600}
                        fontSize={"sm"}
                        p={2}
                        rounded={"md"}
                    >
                        {title}
                    </Text>
                </Flex>
            </Box>
        </Link>
    );
}

export default StatsCardWithImage;
