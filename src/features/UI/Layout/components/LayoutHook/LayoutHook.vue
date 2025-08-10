<script setup lang="ts">
import { Typography } from '@/components/UI'
import { layoutHookReactCode, layoutHookVueCode } from './code'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="layoutCatalogIds.HOOK">
    <ShowCase :onlyCode="true" code="" :vueCode="layoutHookVueCode" :reactCode="layoutHookReactCode">
      <template #head>
        <Paragraph strong :size="16">Layout hook</Paragraph>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
