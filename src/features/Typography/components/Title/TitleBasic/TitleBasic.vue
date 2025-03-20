<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/Typography/repository/catalogIds'
import { titleBasicCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_BASIC">
    <ShowCase title="Title basic" :code="titleBasicCode">
      <Title>Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
