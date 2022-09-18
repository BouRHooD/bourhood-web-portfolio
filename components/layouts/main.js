import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import SceneModelGLB from '../glb-model'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="description" content="Portfolio | Leonov Vladislav - Homepage" />
                <meta name="author" content="Leonov Vladislav" />
                <meta name="author" content="Surflay" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <meta property="og:site_name" content="Portfolio | Leonov Vladislav" />
                <meta name="og:title" content="Portfolio | Leonov Vladislav" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://bourhood.ml/card.png" />

                <title>Portfolio | Leonov Vladislav - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW ="container.lg" pt={14}>
                <SceneModelGLB />
                {children}
                <Footer />
            </Container>
        </Box> 
    )
}

export default Main