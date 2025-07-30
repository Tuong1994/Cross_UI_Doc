<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds';
import { titleVariantReactCode, titleVariantVueCode } from './code';
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue';
import ShowCase from '@/components/View/ShowCase/ShowCase.vue';

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_VARIANT">
    <ShowCase title="Variant" code="" :vueCode="titleVariantVueCode" :reactCode="titleVariantReactCode">
      <Title variant="default">Heading</Title>
      <Title variant="secondary">Heading</Title>
      <Title variant="success">Heading</Title>
      <Title variant="warning">Heading</Title>
      <Title variant="danger">Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>