export const accordionGroupCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { Accordion } from '@/components/UI'

const collapses = [
  {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate assumenda maxime odit eveniet porro cupiditate ullam deleniti non consequatur.'
  },
  {
    id: '2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum minima, animi vero quae voluptatumrepellat nihil ut asperiores aspernatur libero in vitae explicabo error saepe expedita illo maiores? Modiiusto architecto natus sapiente omnis, quos magnam neque voluptas expedita, ipsa voluptates nostrum autem,iste recusandae. Eveniet qui dolores accusantium mollitia ab, ipsum quidem fugit id reiciendis corporissequi, minima quibusdam. Culpa, labore! Corrupti nobis error sunt  tempora officia repudiandae dolor labore, odio eos, quibusdam harum veniam porro animi aut soluta voluptate similique unde dicta eius. Mollitia, voluptate, odit, accusantium consequatur repellendus cupiditate dolor hic libero quos vel ipsam quaerat!.'
  },
  {
    id: '3',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ratione, iusto deserunt quibusdam odioexpedita sint molestias asperiores quos! Similique voluptate necessitatibus voluptatem, distinctioblanditiis quae illo iusto temporibus sed accusamus iure eligendi quam adipisci est mollitia minus, totamlaudantium culpa quas earum quisquam qui. Impedit autem nostrum laudantium qui blanditiis odioneces sitatibus dolore iste voluptatum sequi harum quas veritatis beatae quis fugit labore voluptates quo,praesentium voluptatibus voluptas? Possimus ut temporibus, tempore iure incidunt maxime nihil cupiditate eveniet.'
  }
]

const collapseId = ref<string>('')
</script>

<template>
  <Accordion
    v-for="collapse in collapses"
    :key="collapse.id"
    rootClassName="section-space"
    label="Click to collapse"
    :isCollapsed="(collapseId === collapse.id)"
    @onSelect="() => (collapseId = collapse.id)"
  >
    {{ collapse.content }}
  </Accordion>
</template>
`