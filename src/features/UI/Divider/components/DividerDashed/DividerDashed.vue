<script setup lang="ts">
import { Divider } from '@/components/UI'
import { dividerCatalogIds } from '@/features/UI/Divider/repository/catalogIds'
import { dividerDashedReactCode, dividerDashedVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="dividerCatalogIds.DASHED">
    <ShowCase title="Dashed" :vueCode="dividerDashedVueCode" :reactCode="dividerDashedReactCode">
      <Divider dashed placement="center">Divider</Divider>
      <Divider dashed type="vertical" placement="center">Divider</Divider>
    </ShowCase>
  </AnchorContent>
</template>
