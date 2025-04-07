<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/Typography/repository/catalogIds'
import { titleItalicCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_ITALIC">
    <ShowCase title="Title italic" :code="titleItalicCode">
      <Title italic :level="1">Heading</Title>
      <Title italic :level="2">Heading</Title>
      <Title italic :level="3">Heading</Title>
      <Title italic :level="4">Heading</Title>
      <Title italic :level="5">Heading</Title>
      <Title italic :level="6">Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
