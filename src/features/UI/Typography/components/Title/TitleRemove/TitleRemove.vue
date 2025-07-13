<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { titleRemoveCode } from '@/features/UI/Typography/components/Title/TitleRemove/code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.TITLE_REMOVE">
    <ShowCase title="Title remove" :code="titleRemoveCode">
      <Title remove>Heading</Title>
    </ShowCase>
  </AnchorContent>
</template>
