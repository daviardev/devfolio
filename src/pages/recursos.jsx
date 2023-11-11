import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { GridItem } from '@/components/GridItem'

import Section from '@/components/Section'
import ArticleLayout from '@/components/Layout/Article'

export default function Resources () {
  return (
    <>
      <ArticleLayout title='Recursos'>
        <Container>
          <Heading as='h3' fontSize={20} mb={4}>
            Recursos
          </Heading>

          <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://www.youtube.com/watch?v=bSMZgXzC9AA'
              />
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://www.youtube.com/watch?v=-qBavwqc_mY'
              />
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://www.youtube.com/watch?v=KKxhf50FIPI'
              />
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://www.youtube.com/watch?v=1OFDMwDlnOE'
              />
            </SimpleGrid>
          </Section>

          <Section delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820'
              />
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506'
              />
            </SimpleGrid>
          </Section>

          <Section delay={0.5}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91'
              />
              <GridItem
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt similique optio impedit aut animi corporis. Reprehenderit officia ex nobis temporibus? Harum ullam ipsum dolores nam recusandae tempore inventore sequi?'
                thumbnail='https://firebasestorage.googleapis.com/v0/b/twitter-clone-6c6a2.appspot.com/o/posts%2FfwcB8X5IiWq07zGK7ZTO%2Fimage?alt=media&token=d155a393-a277-41b0-83dc-7f29702f2acd'
                href='https://www.youtube.com/watch?v=vj723NlrIQc'
              />
            </SimpleGrid>
          </Section>
        </Container>
      </ArticleLayout>
    </>
  )
}
