<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { titleItalicReactCode, titleItalicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_ITALIC">
    <ShowCase title="Italic" :vueCode="titleItalicVueCode" :reactCode="titleItalicReactCode">
      <Title italic :level="1">Heading</Title>
      <Title italic :level="2">Heading</Title>
      <Title italic :level="3">Heading</Title>
      <Title italic :level="4">Heading</Title>
      <Title italic :level="5">Heading</Title>
      <Title italic :level="6">Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
