<script setup lang="ts">
import { Flex, Card } from '@/components/UI'
import { flexCatalogIds } from '@/features/UI/Flex/repository/catalogIds'
import { flexGuttersReactCode, flexGuttersVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <AnchorContent :id="flexCatalogIds.GUTTERS">
    <ShowCase title="Gutters" code="" :vueCode="flexGuttersVueCode" :reactCode="flexGuttersReactCode">
      <FlexRow :gutters="[20, 25]">
        <FlexCol v-for="item in 10" :key="item" :span="6">
          <Card />
        </FlexCol>
      </FlexRow>
    </ShowCase>
  </AnchorContent>
</template>
