import { Container, Button, Box, Heading, Image, Text, useColorModeValue, Link, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import Layouts from "../components/layouts/article"
import { StarIcon, ViewIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio"
import { IoLogoGithub, IoLogoDiscord, IoLogoSteam } from 'react-icons/io5'
import GalleryAchievements from '../components/gallery-achievements'

import MyLogoTelegram from '../public/images/links/MyLogoTelegram.js'
import MyLogoCoub from '../public/images/links/MyLogoCoub.js'

const Page = () => {
    return (
        <Layouts>
            <Container>

                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', "whiteAlpha.200")} p={3} mb={5} align="Center">
                    Здравствуйте, это личный сайт разработчика из России!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" align="Center"> Леонов Владислав </Heading>
                        <Heading as="h2" variant="page-title" align="Center"> BouRHooD </Heading>
                        <Text align="Center"> (Видеомонтажер / Разработчик / Дизайнер) </Text>
                        <Text align="Center"> (Просто хороший парень) </Text>
                    </Box>

                    <Box align="Center">
                        <Box flexShrink={0} mt={{base: 0, md: 0}} ml={{md: 0}}>
                            <Image display="inline-block" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="145px" borderRadius="full" src="/images/profileImageLeonovVD.jpg" alt="Profile Image"/>
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title"> В сети </Heading>  
                    <List>
                        <ListItem>
                            <Link href="https://t.me/bourhood" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={MyLogoTelegram} />}>B0uRHooD</Button>
                            </Link>
                            <Link href="https://steamcommunity.com/id/bourhood" target="_blank" marginLeft="2px">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoSteam} />}>BØU[RH]ØØD</Button>
                            </Link>
                            <Link href="https://discordapp.com/users/BouRHooD#6971" target="_blank" marginLeft="2px">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>BouRHooD#6971</Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://coub.com/b0urhood" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={MyLogoCoub} />}>B0uRHooD</Button>
                            </Link>
                            <Link href="https://github.com/bourhood" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@bourhood</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.2}>
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
                        <GalleryAchievements/>
                    </Box>

                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref scroll={false}>
                            <Button leftIcon={<StarIcon />} colorScheme="teal">
                                Мои работы
                            </Button>
                        </NextLink>

                        <NextLink href="/posts" passHref scroll={false}>
                            <Button leftIcon={<ViewIcon />} colorScheme="teal" ml={5}>
                                Мои статьи
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title"> Биография </Heading>  
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Родился в Торопце (托罗佩茨), Russia
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        22 года ничего не делал и вдруг получил степень бакалавра в Московском Политехническом Университете {<br />} 
                        Факультет: &quot;Информационные технологии&quot; {<br />} 
                        Направление: &quot;Управление в технических системах&quot; {<br />} 
                        Профиль: &quot;Киберфизические системы&quot; {<br />}
                        (莫斯科理工大学技术系统管理学士学位)
                    </BioSection>
                    <BioSection>
                        <BioYear>С 2021 ДО 2023</BioYear>
                        Работал программистом в проектной организации АО &quot;ИнжПроектСервис&quot;! Russia (IPS套件)
                    </BioSection>
                    <BioSection>
                        <BioYear>С 2023 ~</BioYear>
                        Работаю программистом в организации ООО &quot;НАНОСОФТ РАЗРАБОТКА&quot;! Russia (NANOCAD开发)
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title"> I ♥ </Heading>  
                    <Paragraph>
                        Senatay, Музыку, Играть на гитаре, Фотографировать, Видеоигры, Монтировать видео, Программировать
                    </Paragraph>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title"> Ключевые навыки </Heading>  
                    <Paragraph>
                        <Heading as="h3" variant="section-title"> Опыт разработки с использованием технологий: </Heading>
                        <Text> &bull; C#, C++, Python 3, JavaScript, PHP, VBA, PascalABC.NET; </Text>
                        <Text> &bull; HTML5, CSS3, jQuery, Ajax, Selenium; </Text>
                        <Text> &bull; WPF, Windows Forms; </Text>
                        <Text> &bull; Arduino, STM32, Assembler; </Text>
                        <Text> &bull; Keras, TensorFlow, Docker; </Text>
                        <Text> &bull; MySQL, PostgreSQL, SQLite, MongoDB. </Text>
                    </Paragraph>
                    <Paragraph>
                        <Heading as="h3" variant="section-title"> Использую: </Heading>
                        <Text> &bull; IDE: PyCharm, Visual Studio Code, Visual Studio 2022, LabVIEW, MATLAB, Arduino IDE, Eclipse IDE for C/C++ Developers; </Text>
                        <Text> &bull; Фреймворки: React, Angular, Next.js; </Text>
                        <Text> &bull; Редакторы: Notepad++; </Text>
                        <Text> &bull; Видео: After Effects, Premiere Pro, Filmora, Sony Vegas; </Text>
                        <Text> &bull; Графика: Photoshop, Figma; </Text>
                        <Text> &bull; ОС: Windows 11, Ubuntu, Raspbian; </Text>
                        <Text> &bull; САПР: Autocad, Inventor. </Text>
                    </Paragraph>
                </Section>

            </Container>
        </Layouts>
    )
}

export default Page
