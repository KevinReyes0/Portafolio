"use client";

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
    Avatar,
    chakra,
    Link,
    HStack,
    IconButton,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    VisuallyHidden
} from "@chakra-ui/react";
import Card from "./Card";
import StatsCard from "./StatsCard";
import StatsCardWithImage from "./SetsCardWithImage";

import {
    FcGraduationCap,
    FcIdea,
    FcCollaboration,
    FcCheckmark,
    FcRefresh,
} from "react-icons/fc";

import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

import { HiAcademicCap } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const Logo = (props) => {
    return (
        <Image
            src="/LogoKevin.png"
            alt="Logo Kevin"
            height="32px"
            {...props}
        />
    );
};

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded="full"
            w={8}
            h={8}
            cursor="pointer"
            as="a"
            href={href}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="background 0.3s ease"
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export const Principal = () => {
    const cardsData = [
        {
            title: "4to. Diversificado",
            description:
                "Aprendi Java para el desarrollo de aplicaciones, base de datos en MySQL, junto con curos de CCNA y Cisco.",
            image:
                "https://whitestack.com/wp-content/uploads/2024/04/switch-de-red_img-02-1024x683.webp",
            author: "Centro Educativo Tecnico Laboral Kinal",
            date: "2023",
        },
        {
            title: "5to. Diversificado",
            description:
                "Segui reforzando mi conocimiento en bases de datos SQL, junto con Java, Java EE y JavaFx. Empeze a ver React y como consumir APIs.",
            image:
                "https://prosetecnisa.es/wp-content/uploads/2023/04/Java-Header-1-1024x624.jpeg",
            author: "Centro Educativo Tecnico Laboral Kinal",
            date: "2024",
        },
        {
            title: "6to. Diversificado",
            description:
                "Empeze viendo JavaScript, Node.js y MongoDB, para el desarrollo de APIs. Despues segui viendo React y React Native. Y finalmente la union entere backend y frontend con Next.js.",
            image: "https://la35.net/assets/img/javascript.png",
            author: "Centro Educativo Tecnico Laboral Kinal",
            date: "2025",
        },
    ];

    return (
        <>
            <Container
                id="inicio"
                maxW="9xl"
                py={12}
                px={{ base: 4, md: 8 }}
                textAlign="center"
            >
                <Stack
                    spacing={4}
                    as={Container}
                    maxW="7xl"
                    py={12}
                    px={{ base: 4, md: 8 }}
                    textAlign="center"
                >
                    <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
                        Back-end developer
                    </Heading>
                    <Text color={"white.600"} fontSize={{ base: "sm", sm: "lg" }}>
                        Me llamo Kevin Manuel Reyes Paz, tengo 17 años, y es un placer
                        compartir con ustedes un poco sobre mi perfil. Más allá de mi
                        trayectoria profesional, me considero una persona con una curiosidad
                        insaciable y una mente orientada a la resolución de problemas,
                        cualidades que aplico tanto en mi vida personal como en mi ámbito
                        profesional.
                        <br />
                    </Text>
                </Stack>
            </Container>
            <Container maxW="7xl" py={12} px={{ base: 4, md: 8 }}>
                <Flex justifyContent="center" alignItems="center" h="216px" w="full">
                    <Image
                        boxSize="300px"
                        objectFit="contain"
                        src="/YoAvatar.png"
                        alt="Logo"
                        mb="60px"
                    />
                </Flex>
            </Container>

            <Container maxW="7xl" py={12} px={{ base: 4, md: 8 }} textAlign="left">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading>Bienvenido a mi portafolio de proyectos</Heading>
                        <Text color={"white.500"} fontSize={"lg"}>
                            En este sitio podrás explorar quién soy y el trabajo que he
                            desarrollado a lo largo de mi formación en el área de desarrollo
                            de software. Encontrarás información sobre mis habilidades,
                            tecnologías que domino, y proyectos en los que he participado.
                            <br />
                            <br />
                            Además, tendrás acceso a detalles personales y formas de contacto,
                            así como descripciones completas de cada proyecto con enlaces
                            directos a sus respectivos repositorios en GitHub.
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue("gray.100", "gray.700")}
                                />
                            }
                        >
                            <Feature
                                icon={
                                    <Icon as={HiAcademicCap} color="yellow.400" w={5} h={5} />
                                }
                                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                                text={
                                    <Link
                                        href="#educacion-tecnica"
                                        color="yellow.400"
                                        _hover={{ textDecoration: "underline" }}
                                    >
                                        Educación y experiencia laboral
                                    </Link>
                                }
                            />

                            <Feature
                                icon={<Icon as={FaTools} color="green.400" w={5} h={5} />}
                                iconBg={useColorModeValue("green.100", "green.900")}
                                text={
                                    <Link
                                        href="#habilidades"
                                        color="green.400"
                                        _hover={{ textDecoration: "underline" }}
                                    >
                                        Habilidades
                                    </Link>
                                }
                            />

                            <Feature
                                icon={
                                    <Icon as={MdWorkOutline} color="purple.400" w={5} h={5} />
                                }
                                iconBg={useColorModeValue("purple.100", "purple.900")}
                                text={
                                    <Link
                                        href="#proyectos"
                                        color="purple.400"
                                        _hover={{ textDecoration: "underline" }}
                                    >
                                        Proyectos
                                    </Link>
                                }
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={"md"}
                            alt={"feature image"}
                            src={
                                "https://www.epitech-it.es/wp-content/uploads/2022/07/aprender-programacion-1.jpg"
                            }
                            objectFit={"cover"}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>

            <Box>
                <Box bg="#0d0d11" borderRadius="md" boxShadow="md" p={8} mt={20}>
                    <Stack
                        spacing={4}
                        as={Container}
                        maxW="7xl"
                        py={12}
                        px={{ base: 4, md: 8 }}
                        textAlign="center"
                    >
                        <Heading
                            color={"white"}
                            fontSize={{ base: "2xl", sm: "4xl" }}
                            fontWeight={"bold"}
                        >
                            Descripción personal
                        </Heading>
                        <Text color={"white"} fontSize={{ base: "sm", sm: "lg" }}>
                            Soy un apasionado del aprendizaje continuo, siempre buscando
                            expandir mis horizontes a través de la exploración de diversas
                            disciplinas y la adquisición de nuevas habilidades. En mi tiempo
                            libre, disfruto sumergiéndome en actividades que agudizan mi
                            pensamiento estratégico y mi atención al detalle, como los juegos
                            de mesa complejos o tocar instrumentos.
                        </Text>
                    </Stack>
                    <Container maxW={"5xl"} mt={12}>
                        <Flex flexWrap="wrap" gridGap={6} justify="center" color={"white"}>
                            <Card
                                heading={"Aprendizaje Continuo"}
                                icon={<Icon as={FcGraduationCap} w={10} h={10} />}
                                description={
                                    "Siempre estoy buscando nuevas oportunidades para aprender y crecer, ya sea a través de cursos, lecturas o explorando nuevos pasatiempos."
                                }
                                href={"#"}
                            />
                            <Card
                                heading={"Resolución de Problemas"}
                                icon={<Icon as={FcIdea} w={10} h={10} />}
                                description={
                                    "Disfruto analizando situaciones complejas y encontrando soluciones creativas y eficientes para los desafíos."
                                }
                                href={"#"}
                            />
                            <Card
                                heading={"Trabajo en Equipo"}
                                icon={<Icon as={FcCollaboration} w={10} h={10} />}
                                description={
                                    "Me desenvuelvo bien en entornos colaborativos y valoro la comunicación efectiva para alcanzar objetivos comunes."
                                }
                                href={"#"}
                            />
                            <Card
                                heading={"Atención al Detalle"}
                                icon={<Icon as={FcCheckmark} w={10} h={10} />}
                                description={
                                    "Poseo una gran capacidad para identificar pequeños errores o inconsistencias, asegurando la calidad en todo lo que hago."
                                }
                                href={"#"}
                            />
                            <Card
                                heading={"Adaptabilidad"}
                                icon={<Icon as={FcRefresh} w={10} h={10} />}
                                description={
                                    "Me ajusto rápidamente a nuevos entornos, herramientas o metodologías de trabajo, manteniendo siempre una actitud positiva."
                                }
                                href={"#"}
                            />
                        </Flex>
                    </Container>
                </Box>
            </Box>

            <Container maxW="7xl" py={12} px={{ base: 4, md: 8 }}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {/* Educación Técnica */}
                    <Box id="educacion-tecnica">
                        <Stack spacing={4} textAlign="center" mb={6}>
                            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight="bold">
                                Educación Técnica
                            </Heading>
                        </Stack>
                        <SimpleGrid columns={1} spacing={10}>
                            {cardsData.map((card, index) => (
                                <Box
                                    key={`edu-${index}`}
                                    maxW={"445px"}
                                    w={"full"}
                                    bg={useColorModeValue("white", "gray.900")}
                                    boxShadow={"2xl"}
                                    rounded={"md"}
                                    p={6}
                                    overflow={"hidden"}
                                    _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                                    transition="all 0.3s ease-in-out"
                                    mx="auto"
                                >
                                    <Box
                                        h="210px"
                                        bg="gray.100"
                                        mt={-6}
                                        mx={-6}
                                        mb={6}
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            objectFit="cover"
                                            width="100%"
                                            height="100%"
                                        />
                                    </Box>
                                    <Stack>
                                        <Heading
                                            mt={1}
                                            color={useColorModeValue("gray.700", "white")}
                                            fontSize={"2xl"}
                                        >
                                            {card.title}
                                        </Heading>
                                        <Text color={"gray.500"}>{card.description}</Text>
                                    </Stack>
                                    <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                                        <Avatar
                                            size="md"
                                            src="/YoAvatar.png"
                                            name="Kevin Reyes"
                                            showBorder
                                        />
                                        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                                            <Text fontWeight={600}>{card.author}</Text>
                                            <Text color={"gray.500"}>{card.date}</Text>
                                        </Stack>
                                    </Stack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                    <Box id="experiencia-laboral">
                        <Stack spacing={4} textAlign="center" mb={6}>
                            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight="bold">
                                Experiencia Laboral
                            </Heading>
                        </Stack>
                        <SimpleGrid columns={1} spacing={10}>
                            {[
                                {
                                    title: "Desarrollador Junior",
                                    description:
                                        "Práctica profesional desarrollando APIs con Node.js, Express y MongoDB, integrando control de usuarios con JWT y Passport. ",
                                    image:
                                        "https://media.licdn.com/dms/image/v2/C4E0BAQGEfVfua0Dk4g/company-logo_200_200/company-logo_200_200/0/1660926449005/tribalworldwidegt_logo?e=2147483647&v=beta&t=zSOcP3DHtTl5pUuJCy-_oSktnwFlTjj-8-Yu3MY4VKw",
                                    author: "Tribal Worldwide",
                                    date: "agosto 2025 - actualidad",
                                },
                            ].map((job, index) => (
                                <Box
                                    key={`exp-${index}`}
                                    maxW={"445px"}
                                    w={"full"}
                                    bg={useColorModeValue("white", "gray.900")}
                                    boxShadow={"2xl"}
                                    rounded={"md"}
                                    p={6}
                                    overflow={"hidden"}
                                    _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                                    transition="all 0.3s ease-in-out"
                                    mx="auto"
                                >
                                    <Box
                                        h="210px"
                                        bg="gray.100"
                                        mt={-6}
                                        mx={-6}
                                        mb={6}
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={job.image}
                                            alt={job.title}
                                            objectFit="cover"
                                            width="100%"
                                            height="100%"
                                        />
                                    </Box>
                                    <Stack>
                                        <Heading
                                            mt={1}
                                            color={useColorModeValue("gray.700", "white")}
                                            fontSize={"2xl"}
                                        >
                                            {job.title}
                                        </Heading>
                                        <Text color={"gray.500"}>{job.description}</Text>
                                    </Stack>
                                    <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                                        <Avatar
                                            size="md"
                                            src="/YoAvatar.png"
                                            name="Kevin Reyes"
                                            showBorder
                                        />
                                        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                                            <Text fontWeight={600}>{job.author}</Text>
                                            <Text color={"gray.500"}>{job.date}</Text>
                                        </Stack>
                                    </Stack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </SimpleGrid>
            </Container>

            <Box
                id="habilidades"
                bg="#0d0d11"
                borderRadius="md"
                boxShadow="md"
                p={8}
                mt={20}
            >
                <Container maxW="8xl" px={{ base: 4, md: 8 }}>
                    <chakra.h1
                        textAlign={"center"}
                        fontSize={"4xl"}
                        py={10}
                        fontWeight={"bold"}
                        color={"white"}
                    >
                        Habilidades en los siguientes lenguajes y tecnologías
                    </chakra.h1>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                            title="Java"
                            stat="70"
                            iconSrc="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                        />
                        <StatsCard
                            title="MySQL"
                            stat="70"
                            iconSrc="https://pngimg.com/d/mysql_PNG23.png"
                        />
                        <StatsCard
                            title="Node.js"
                            stat="80"
                            iconSrc="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                        />
                    </SimpleGrid>
                    <SimpleGrid
                        mt={10}
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        <StatsCard
                            title="HTML"
                            stat="60"
                            iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
                        />
                        <StatsCard
                            title="CSS"
                            stat="50"
                            iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                        />
                        <StatsCard
                            title="JavaScript"
                            stat="80"
                            iconSrc="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png"
                        />
                    </SimpleGrid>
                    <SimpleGrid
                        mt={10}
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        <StatsCard
                            title="MongoDB"
                            stat="40"
                            iconSrc="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-logo-freebies-pack-logos-icons-1175140.png"
                        />
                        <StatsCard
                            title="React"
                            stat="55"
                            iconSrc="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
                        />
                        <StatsCard
                            title="GitHub"
                            stat="60"
                            iconSrc="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                        />
                    </SimpleGrid>
                    <SimpleGrid
                        mt={10}
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        <StatsCard
                            title="JavaFX"
                            stat="60"
                            iconSrc="https://www.qftest.com/blog/resources/JavaFX.png"
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            <Container
                id="proyectos"
                maxW="9xl"
                py={12}
                px={{ base: 4, md: 8 }}
                textAlign="center"
            >
                <Stack
                    spacing={4}
                    as={Container}
                    maxW="7xl"
                    py={12}
                    px={{ base: 4, md: 8 }}
                    textAlign="center"
                >
                    <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
                        Proyectos
                    </Heading>
                    <Text color={"white.600"} fontSize={{ base: "sm", sm: "lg" }}>
                        Unos pocos proyectos que he trabajado en el pasado.
                        <br />
                    </Text>
                </Stack>
            </Container>

            <Box p={8} mt={20}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box p={8}>
                        <Stack spacing={5}>
                            <Box p={1}>
                                <SimpleGrid columns={3} spacing={4}>

                                    <StatsCardWithImage
                                        title="fRONT-END"
                                        iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                        link="https://github.com/KevinReyes0/Agenda-web.git"
                                    />

                                </SimpleGrid>
                            </Box>
                            <Heading>Agenda Web</Heading>
                            <Text color={"gray.500"} fontSize={"lg"}>
                                Como su nombre lo dice, es una agenda web que sirve para organizar nuestros contactos, eventos y actividades.
                            </Text>
                            <Stack spacing={4}>
                                <HStack spacing={6} justify="center">
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">HTML</Text>}
                                    />

                                    <Feature
                                        icon={
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                                                alt="CSS"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">CSS</Text>}
                                    />

                                    <Feature
                                        icon={
                                            <Image
                                                src="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png"
                                                alt="JavaScript"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">JavaScript</Text>}
                                    />
                                </HStack>
                            </Stack>
                        </Stack>
                    </Box>

                    <SimpleGrid columns={2} spacing={4}>
                        <Image
                            rounded="md"
                            alt="image 1"
                            src="/AgendaP.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                        <Image
                            rounded="md"
                            alt="image 2"
                            src="/AgendaTDL.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                    </SimpleGrid>
                </SimpleGrid >
            </Box >

            <Box p={8} mt={20}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box p={8}>
                        <Stack spacing={5}>
                            <Box p={1}>
                                <SimpleGrid columns={3} spacing={4}>
                                    <StatsCardWithImage
                                        title="fRONT-END"
                                        iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                        link="https://github.com/KinalTrabajos/GestorDeHoteles-Fronted.git"
                                    />
                                    <StatsCardWithImage
                                        title="back-end"
                                        iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                        link="https://github.com/KinalTrabajos/GestorDeHoteles-Backend.git"
                                    />
                                </SimpleGrid>

                            </Box>
                            <Heading>Gestor de Hoteles</Heading>
                            <Text color={"gray.500"} fontSize={"lg"}>
                                Es una aplicación para hoteles, donde los usuarios pueden hacer
                                reservaciones de habitaciones y eventos, y los administradores
                                pueden crear hoteles nuevos y agregar habitaciones.
                            </Text>
                            <Stack spacing={4}>
                                <HStack spacing={6} justify="center">
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">JavaScript</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">Node.js</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">Tailwind ui</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">HTML</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">CSS</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">React</Text>}
                                    />
                                </HStack>
                            </Stack>
                        </Stack>
                    </Box>
                    <SimpleGrid columns={2} spacing={4}>
                        <Image
                            rounded="md"
                            alt="image 1"
                            src="/HotelP.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                        <Image
                            rounded="md"
                            alt="image 2"
                            src="/HotelS.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                    </SimpleGrid>
                </SimpleGrid>
            </Box>

            <Box p={8} mt={20}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box p={8}>
                        <Stack spacing={5}>
                            <Box p={1}>
                                <SimpleGrid columns={3} spacing={4}>
                                    <StatsCardWithImage
                                        title="back-end"
                                        iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                        link="https://github.com/KevinReyes0/Gestor-de-ventas.git"
                                    />
                                </SimpleGrid>

                            </Box>
                            <Heading>Gestor de Ventas</Heading>
                            <Text color={"gray.500"} fontSize={"lg"}>
                                Se trata de un backend de ventas, donde los usuarios pueden añadir productos a su carrito de compras
                                y claramente comprar los productos que estan en su carrito.
                                <br />
                                Los administradores pueden crear nuevos productos, pueden gestionar todas las compras, y ver historiales
                                y estadisticas de compras.
                            </Text>
                            <Stack spacing={4}>
                                <HStack spacing={6} justify="center">
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">JavaScript</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">Node.js</Text>}
                                    />
                                    <Feature
                                        icon={
                                            <Image
                                                src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-logo-freebies-pack-logos-icons-1175140.png"
                                                alt="HTML"
                                                boxSize={8}
                                            />
                                        }
                                        iconBg={"#F1F1F1"}
                                        text={<Text as="span">Mongo DB</Text>}
                                    />
                                </HStack>
                            </Stack>
                        </Stack>
                    </Box>
                    <SimpleGrid columns={2} spacing={4}>
                        <Image
                            rounded="md"
                            alt="image 1"
                            src="/VentasC.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                        <Image
                            rounded="md"
                            alt="image 2"
                            src="/VentasB.png"
                            objectFit="cover"
                            height="270px"
                            width="350px"
                        />
                    </SimpleGrid>
                </SimpleGrid>
            </Box>

            <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
                <Flex>
                    <Box
                        id="contacto"
                        bg="#0d0d11"
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contacto</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Rellene el siguiente formulario para contactarme
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                    +502 3192-4067
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="300px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                    reyespazkevinmanuel@gmail.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                    Guatemala, Guatemala
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start"
                                        >
                                            <a href="https://www.facebook.com/kevin.paz.914677/" target="_blank" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="facebook"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: '#0D74FF' }}
                                                    icon={<FaFacebook size="28px" color="white" />}
                                                />
                                            </a>
                                            <a href="https://github.com/KevinReyes0" target="_blank" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="github"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: '#0D74FF' }}
                                                    icon={<FaGithub size="28px" color="white" />}
                                                />
                                            </a>
                                            <a href="https://www.instagram.com/k3.__.vin?igsh=MWhneGtpemJodG8yNw==" target="_blank" rel="noopener noreferrer">
                                                <IconButton
                                                    aria-label="instagram"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: '#0D74FF' }}
                                                    icon={<FaInstagram size="28px" color="white" />}
                                                />
                                            </a>
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Tu nombre</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement pointerEvents="none">
                                                            <BsPerson color="gray.800" />
                                                        </InputLeftElement>
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Correo electronico</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement pointerEvents="none">
                                                            <MdOutlineEmail color="gray.800" />
                                                        </InputLeftElement>
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mensaje</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="mensaje"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                                                        Enviar
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>

            <Box
                bg="#0d0d11"
                color="white">
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Logo />
                    <Text>© 2025 por Kevin Manuel Reyes Paz</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Facebook'} href={'https://www.facebook.com/kevin.paz.914677/'}>
                            <FaFacebook />
                        </SocialButton>
                        <SocialButton label={'Github'} href={'https://github.com/KevinReyes0'}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'https://www.instagram.com/k3.__.vin?igsh=MWhneGtpemJodG8yNw=='}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};
