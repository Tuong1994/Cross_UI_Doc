<script setup lang="ts">
import { Typography } from '@/components/UI'
import { titleLevelReactCode, titleLevelVueCode } from './code'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_LEVEL">
    <ShowCase title="Level" code="" :vueCode="titleLevelVueCode" :reactCode="titleLevelReactCode">
      <Title :level="1">Heading</Title>
      <Title :level="2">Heading</Title>
      <Title :level="3">Heading</Title>
      <Title :level="4">Heading</Title>
      <Title :level="5">Heading</Title>
      <Title :level="6">Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
