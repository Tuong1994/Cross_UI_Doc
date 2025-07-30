<script setup lang="ts">
import { Button } from '@/components/UI'
import { buttonDisabledReactCode, buttonDisabledVueCode } from './code'
import { buttonCatalogIds } from '@/features/UI/Button/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="buttonCatalogIds.DISABLED">
    <ShowCase title="Disabled" code="" :vueCode="buttonDisabledVueCode" :reactCode="buttonDisabledReactCode">
      <Button disabled>Button</Button>
    </ShowCase>
  </AnchorContent>
</template>


