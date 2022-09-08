import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1"> Не найдено - 404 </Heading>
            <Text>Страница, которую вы ищете, не найдена.</Text>
            <Text>Возможно разработчик просто так шутит.</Text>
            <Text>Попробуйте перезагружать страницу очень много раз.</Text>
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