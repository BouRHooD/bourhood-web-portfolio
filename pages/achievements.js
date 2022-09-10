import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import habrAutocadPost from '../public/images/page_posts/habr_autocad_first_post.jpg'
import scileadRazrabotkaIntellektualnogo from '../public/images/page_posts/scilead_ru_razrabotka_intellektualnogo.jpg'

const Posts = () => (
  <Layout title="Достижения">
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
        Достижения
    </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Как облегчить себе жизнь при работе с плагинами в AutoCAD .NET API"
            thumbnail={habrAutocadPost}
            href="https://habr.com/ru/sandbox/175936/"
          />
          <GridItem
            title="Научный лидер (IT-Технологии): Разработка интеллектуального шлюза системы умного дома на базе микроконтроллера для связи конечных устройств и облачной платформы интернета вещей"
            thumbnail={scileadRazrabotkaIntellektualnogo}
            href="https://scilead.ru/article/2851-razrabotka-intellektualnogo-shlyuza-sistemi-u"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
