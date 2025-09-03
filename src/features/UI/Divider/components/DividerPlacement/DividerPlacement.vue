<script setup lang="ts">
import { Divider } from '@/components/UI'
import { dividerCatalogIds } from '@/features/UI/Divider/repository/catalogIds'
import { dividerPlacementReactCode, dividerPlacementVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="dividerCatalogIds.PLACEMENT">
    <ShowCase title="Placement" :vueCode="dividerPlacementVueCode" :reactCode="dividerPlacementReactCode">
      <Divider placement="left">Left</Divider>
      <Divider placement="center">Divider</Divider>
      <Divider placement="right">Right</Divider>
      <Divider type="vertical" placement="left">Top</Divider>
      <span>Content</span>
      <Divider type="vertical" placement="center">Center</Divider>
      <span>Content</span>
      <Divider type="vertical" placement="right">Bottom</Divider>
    </ShowCase>
  </AnchorContent>
</template>
