<script setup lang="ts">
import { Typography } from '@/components/UI'
import { titleWeightCode } from './code';
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_WEIGHT">
    <ShowCase title="Title weight" :code="titleWeightCode">
      <Title>Heading</Title>
      <Title :weight="800">Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
