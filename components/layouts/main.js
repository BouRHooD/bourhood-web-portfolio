import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Portfolio | Leonov Vladislav - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW ="container.md" pt={14}>
                <VoxelDog />
                {children}
            </Container>
        </Box> 
    )
}

export default Main