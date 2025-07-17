'use client'

import {
    Box,
    Flex,
    Button,
    Stack,
    useColorMode,
    Image,
    HStack,
    useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Links = [
    { label: 'Inicio', href: '#navbar2' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Proyectos', href: '#proyectos' },
]

const NavLink = ({ href, children }) => {
    return (
        <Box
            as="a"
            href={href}
            px={3}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.700', 'gray.700'),
            }}
            color={useColorModeValue('white', 'white')}
        >
            {children}
        </Box>
    );
};

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box bg="#0D0D11" px={6} py={6} position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            >
            <Flex justify="space-between" align="center">
                <Image
                    boxSize="60px"
                    objectFit="contain"
                    src="/LogoKevin.png"
                    alt="Logo"
                />
                <Stack direction={'row'} spacing={7}>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.label} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </HStack>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                </Stack>

            </Flex>
        </Box>
    )
}