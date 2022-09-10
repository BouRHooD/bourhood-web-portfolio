import { Container, Heading, SimpleGrid, Divider, useColorModeValue, Box } from '@chakra-ui/react'
import Section from "../components/section"
import Layouts from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

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
                        <WorkGridItem id="inkdrop" title="I-PS. ПОС КОМПЕЛКТ" thumbnail={thumbInkdrop}>
                            Набор плагинов и программ для работы с ПОС в AutoCAD
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.2}>
                        <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Bamembro">
                            Вечный двигатель на Arduino с нейронной сетью
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layouts>
    )
}

export default Works