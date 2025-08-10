<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { titleRemoveReactCode, titleRemoveVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_REMOVE">
    <ShowCase title="Remove" :vueCode="titleRemoveVueCode" :reactCode="titleRemoveReactCode">
      <Title remove>Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
