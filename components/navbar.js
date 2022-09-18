import Logo from './logo'
import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('black', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link 
            p={2} 
            rounded="0.375rem"
            bg={active ? 'grassTeal' : undefined} 
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box 
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.lg" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={3}>
                    <Heading as="h1" size="md">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack 
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 3, md: 0 }}
                >
                    <LinkItem href='/' path={path}>
                        Главная
                    </LinkItem> 

                    <LinkItem href='/works' path={path}>
                        Проекты
                    </LinkItem>

                    <LinkItem href='/posts' path={path}>
                        Статьи
                    </LinkItem>

                    <LinkItem target="_blank" path={path} display="inline-flex" alignItems="center" style={{ gap: 4 }} pl={2}
                    href="https://github.com/bourhood/bourhood-web-portfolio"
                    >
                        <IoLogoGithub />
                        Исходный код    
                    </LinkItem>
                </Stack>

                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" borderColor="gray" aria-label="Options"/>

                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Главная</MenuItem>
                                </NextLink>

                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Проекты</MenuItem>
                                </NextLink>

                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Статьи</MenuItem>
                                </NextLink>

                                <MenuItem as={Link} href="https://github.com/bourhood/bourhood-web-portfolio">Исходный код</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>  
    )
}

export default Navbar