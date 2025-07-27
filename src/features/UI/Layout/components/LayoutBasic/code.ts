export const layoutBasicCode = `
<script setup lang="ts">
import { Layout } from '@/components/UI'

const { Container, Head, Side, Body, Menu, Content } = Layout
</script>

<template>
  <Container>
    <Head>
      <Menu
        :items="[
          { id: 'item-1', label: 'Item 1', type: 'text' },
          { id: 'item-2', label: 'Item 2', type: 'text' },
          { id: 'item-3', label: 'Item 3', type: 'text' }
        ]"
      />
    </Head>
    <Body>
      <Side collapsable>
        <Menu
          type="vertical"
          :items="[
            { id: 'item-1', label: 'Item 1', type: 'text' },
            { id: 'item-2', label: 'Item 2', type: 'text' },
            { id: 'item-3', label: 'Item 3', type: 'text' }
          ]"
        />
      </Side>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem tempore voluptatum, quasi
        possimus similique eaque, minima nesciunt voluptates natus quam! Et quasi mollitia magni voluptatum
        repellat. Itaque magnam quisquam vero harum nam nihil fugiat, aut omnis dolores, commodi minus
        perspiciatis sapiente cumque voluptatem impedit. Magnam molestiae, voluptate itaque harum sunt ducimus
        quos animi quaerat repudiandae quibusdam beatae vero sit placeat obcaecati nesciunt optio sint hic
        ipsum laudantium inventore libero magni et. Voluptas mollitia accusantium facere ullam reiciendis
        impedit dolorem recusandae animi maiores! Nobis natus, iure impedit similique quos commodi, velit at
        cupiditate fugit rerum repudiandae ullam inventore minus modi!
      </Content>
    </Body>
  </Container>
</template>
`
