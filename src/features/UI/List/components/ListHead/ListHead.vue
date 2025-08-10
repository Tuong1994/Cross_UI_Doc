<script setup lang="ts">
import { UList } from '@/components/UI'
import { listHeadReactCode, listHeadVueCode } from './code'
import { listCatalogIds } from '@/features/UI/List/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { List, ListItem } = UList
</script>

<template>
  <AnchorContent :id="listCatalogIds.HEAD">
    <ShowCase title="Header" :vueCode="listHeadVueCode" :reactCode="listHeadReactCode">
      <List>
        <template #head>List title</template>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      </List>
    </ShowCase>
  </AnchorContent>
</template>
