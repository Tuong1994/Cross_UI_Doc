<script setup lang="ts">
import { Button } from '@/components/UI'
import { buttonTextCode } from './code'
import { buttonCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.TEXT">
    <ShowCase title="Text" :code="buttonTextCode">
      <Button text>Button</Button>
    </ShowCase>
  </AnchorContent>
</template>
