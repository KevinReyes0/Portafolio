import {
    Box,
    Stat,
    StatLabel,
    StatNumber,
    Flex,
    Progress,
    Image
} from '@chakra-ui/react';


function StatsCard({ title, stat, iconSrc }) {
    return (
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
        >
            <Stat w="full">
                <Flex justifyContent="space-between" align="center" mb={6}>
                    <Box>
                        <StatLabel fontSize="xl" fontWeight="bold" color="white">
                            {title}
                        </StatLabel>
                    </Box>
                    <Box>
                        <Image
                            src={iconSrc}
                            alt={`${title} logo`}
                            boxSize="70px"
                            objectFit="contain"
                        />
                    </Box>
                </Flex>

                <Flex align="center" gap={4}>
                    <Progress
                        hasStripe
                        value={parseInt(stat)}
                        flex="1"
                        colorScheme="green"
                        borderRadius="xl"
                        height="17px"
                    />
                    <StatNumber fontSize="lg" fontWeight="bold" color="white" whiteSpace="nowrap">
                        {stat}%
                    </StatNumber>
                </Flex>
            </Stat>
        </Box>
    );
}

export default StatsCard;