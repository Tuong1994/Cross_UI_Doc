<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { titleUnderlineReactCode, titleUnderlineVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_UNDERLINE">
    <ShowCase title="Underline" :vueCode="titleUnderlineVueCode" :reactCode="titleUnderlineReactCode">
      <Title underline>Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
