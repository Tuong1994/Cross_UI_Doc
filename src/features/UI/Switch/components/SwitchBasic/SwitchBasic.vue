<script setup lang="ts">
import { Switch } from '@/components/UI'
import { switchCatalogIds } from '@/features/UI/Switch/repository/catalogIds'
import { switchBasicReactCode, switchBasicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <AnchorContent :id="switchCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="switchBasicVueCode" :reactCode="switchBasicReactCode">
      <Switch @onSwitch="handleSwitch" />
    </ShowCase>
  </AnchorContent>
</template>
