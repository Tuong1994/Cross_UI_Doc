<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { titleBasicReactCode, titleBasicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_BASIC">
    <ShowCase title="Basic" :vueCode="titleBasicVueCode" :reactCode="titleBasicReactCode">
      <Title>Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
