import { Container, Badge, Link, List, ListItem, AspectRatio, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
  
const Work = () => (
    <Layout title="I-PS – ПОС. КОМПЛЕКТ">
        <Container>
            <Title>
                I-PS – ПОС. КОМПЛЕКТ <Badge>2021-</Badge>
            </Title>
            <WorkImage src='/images/page_works/I-PS_POS_KOMPLEKT/i-ps_pos_komplekt.jpg' alt="Inkdrop" />
            <P>
                Программа предназначена для автоматизации процессов проектирования, создания, хранения, анализа 
                и обработки информационной модели в AutoCAD и NanoCAD с последующей выдачей спецификаций для 
                разработки проекта ПОС (проект организации строительства) инженерных сетей в Microsoft Excel. 
                Программа обеспечивает: связь планового и профильного положения котлованов и траншей для 
                строительства коммуникации; подсчёт объемов благоустройства; подсчёт процента засыпки песком/мокрого 
                грунта; связь габаритов объектов и выносок; фокусировку на выбранных объектах; перенос данных в файл Excel. 
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Сайт</Meta>
                    <Link href="http://i-ps.ru/novosti/8-marta.html">
                        http://i-ps.ru/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Платформа</Meta>
                    <span>Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Технологии</Meta>
                    <span>AutoCAD, Framework 4.7, C#, MS Excel, WPF, MVVM</span>
                </ListItem>
                <ListItem>
                    <Meta>Презентация</Meta>
                    <Link href="https://disk.yandex.ru/i/AgjFFOPGXDXNlA">
                        Комплекс программ «I-PS – ПОС. КОМПЛЕКТ» для комфортного проектирования <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <AspectRatio maxW="640px" ratio={1.4}>
                        <iframe src="https://www.youtube.com/embed/amoP0jlPbsk?vq=hd720" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </AspectRatio>
                    <AspectRatio maxW="640px" ratio={1.4}>
                        <iframe src="https://www.youtube.com/embed/pIInQheEF-c?vq=hd720" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </AspectRatio>
                </SimpleGrid>

                <AspectRatio maxW="640px" ratio={1.4} my={5}>
                    <iframe src="https://www.youtube.com/embed/Vr9QCFqOADQ?vq=hd720" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </AspectRatio>
            </Section>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
  