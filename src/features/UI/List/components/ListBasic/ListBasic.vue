<script setup lang="ts">
import { UList } from '@/components/UI'
import { listBasicReactCode, listBasicVueCode } from './code'
import { listCatalogIds } from '@/features/UI/List/repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'

const { List, ListItem } = UList
</script>

<template>
  <AnchorContent :id="listCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="listBasicVueCode" :reactCode="listBasicReactCode">
      <List>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      </List>
    </ShowCase>
  </AnchorContent>
</template>
