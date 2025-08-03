<script setup lang="ts">
import { UList } from '@/components/UI'
import { listIconReactCode, listIconVueCode } from './code'
import { listCatalogIds } from '@/features/UI/List/repository/catalogIds'
import { iconName } from '@/components/UI/Icon/constant'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { List, ListItem } = UList
</script>

<template>
  <AnchorContent :id="listCatalogIds.ICON">
    <ShowCase title="Icon" code="" :vueCode="listIconVueCode" :reactCode="listIconReactCode">
      <List :icon="iconName.THUMBS_UP">
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem?</ListItem>
      </List>
    </ShowCase>
  </AnchorContent>
</template>
