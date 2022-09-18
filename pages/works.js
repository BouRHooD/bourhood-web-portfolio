import { Container, Heading, SimpleGrid, useColorModeValue, Box, Badge, Text } from '@chakra-ui/react'
import Section from "../components/section"
import Layouts from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"

import thumbPOSKOMPLEKT from '../public/images/page_works/I-PS_POS_KOMPLEKT/i-ps_pos_komplekt.jpg'
import thumbBamembro from '../public/images/page_works/Bamembro/menkiki_eyecatch.png'

const Works = () => {
    return (
        <Layouts>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}> Проекты </Heading>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', "whiteAlpha.200")} p={3} mb={6} align="Center">
                    Ниже приведены реализованные проекты и проекты, над которыми сейчас работаю
                </Box>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="I-PS_POS_KOMPLEKT" title={<Text>I-PS – ПОС. КОМПЛЕКТ <Badge>2021-</Badge></Text>} thumbnail={thumbPOSKOMPLEKT}>
                            Набор плагинов и программ для работы с ПОС в AutoCAD
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.2}>
                        <WorkGridItem id="Bamembro" thumbnail={thumbBamembro} title={<Text>Bamembro <Badge>2000-{new Date().getFullYear()}</Badge></Text>}>
                            Вечный двигатель на Arduino с нейронной сетью
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layouts>
    )
}

export default Works