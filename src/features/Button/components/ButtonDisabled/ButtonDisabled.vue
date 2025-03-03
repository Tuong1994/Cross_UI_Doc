<script setup lang="ts">
import { Button } from '@/components/UI'
import { buttonDisabledCode } from './code'
import { buttonCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.DISABLED">
    <ShowCase title="Disabled" :code="buttonDisabledCode">
      <Button disabled>Button</Button>
    </ShowCase>
  </AnchorContent>
</template>
