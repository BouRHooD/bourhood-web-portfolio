import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1" align="center"> Не найдено - 404 </Heading>
            <Text align="center">Страница, которую вы ищете, не найдена.</Text>
            <Text align="center">Попробуйте перезагружать страницу очень много раз.</Text>
            <Text align="center">* Возможно разработчик просто шутит *</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Вернуться на главную страницу</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound