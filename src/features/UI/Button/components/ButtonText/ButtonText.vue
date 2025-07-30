<script setup lang="ts">
import { Button } from '@/components/UI'
import { buttonTextReactCode, buttonTextVueCode } from './code'
import { buttonCatalogIds } from '@/features/UI/Button/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.TEXT">
    <ShowCase title="Text" code="" :vueCode="buttonTextVueCode" :reactCode="buttonTextReactCode">
      <Button text>Button</Button>
    </ShowCase>
  </AnchorContent>
</template>


