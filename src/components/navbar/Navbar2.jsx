'use client'

import {
    Box,
    Flex,
    Image
} from '@chakra-ui/react'


export default function Nav() {

    return (
        <Box id="navbar2" bg="#0D0D11" px={6} py={6}
            >
            <Flex justify="space-between" align="center">
                <Image
                    boxSize="60px"
                    objectFit="contain"
                    src="/LogoKevin.png"
                    alt="Logo"
                />

            </Flex>
        </Box>
    )
}