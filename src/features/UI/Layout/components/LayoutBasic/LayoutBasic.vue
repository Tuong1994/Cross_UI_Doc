<script setup lang="ts">
import { Typography } from '@/components/UI'
import { layoutBasicReactCode, layoutBasicVueCode } from './code'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="layoutCatalogIds.BASIC">
    <ShowCase :onlyCode="true" code="" :vueCode="layoutBasicVueCode" :reactCode="layoutBasicReactCode">
      <template #head>
        <Paragraph :size="16" strong>Basic</Paragraph>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
