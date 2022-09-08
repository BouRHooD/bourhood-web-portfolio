import { Container, Button, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import Layouts from "../components/layouts/article"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'

const Page = ( ) => {
    return (
        <Layouts>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAplha.500', "whiteAlpha.200")} p={3} mb={6} align="Center">
                    Здравствуйте, это личный сайт разработчика из России!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" align="Center"> Леонов Владислав </Heading>
                        <Heading as="h2" variant="page-title" align="Center"> BouRHooD </Heading>
                        <p align="Center"> (Видеомонтажер / Разработчик / Дизайнер) </p>
                        <p align="Center"> (Просто хороший парень) </p>
                    </Box>

                    <Box>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}}>
                            <Image display="inline-block" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" borderRadius="full" src="/images/profileImageLeonovVD.jpg" alt="Profile Image"></Image>
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title"> Обо мне </Heading>  
                    <Paragraph>
                        Я, Леонов Владислав, разработчик со страстью к созданию цифровых сервисов/вещей.
                        Я публикую контент своего вдохновения и творчества на YouTube канале
                        под названием {' '}
                        <NextLink href="https://www.youtube.com/bourhood" passHref> 
                            <Link target="_blank">BouRHooD</Link> 
                        </NextLink>
                        , который насчитывает более 1 тысячи подписчиков.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Мои работы
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title"> Биография </Heading>  
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Родился в Торопце (托罗佩茨), Russia
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        22 года ничего не делал и вдруг получил степень бакалавра по программе &quot;Управление в технических системах&quot; в Московском Политехническом Университете
                        (莫斯科理工大学技术系统管理学士学位)
                    </BioSection>
                    <BioSection>
                        <BioYear>С 2021 ~</BioYear>
                        Работаю программистом в проектной организации АО &quot;ИнжПроектСервис&quot;! Russia (加入Injprojectservice)
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title"> I ♥ </Heading>  
                    <Paragraph>
                        Senatay, Музыку, Играть на гитаре, Фотографировать, Видеоигры, Монтировать видео
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title"> В сети </Heading>  
                    <List>
                        <ListItem>
                            <Link href="https://github.com/bourhood" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@bourhood</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layouts>
    )
}

export default Page
