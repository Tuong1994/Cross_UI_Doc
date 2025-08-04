<script setup lang="ts">
import { Tooltip, Button } from '@/components/UI'
import { tooltipBasicReactCode, tooltipBasicVueCode } from './code'
import { tooltipCatalogIds } from '@/features/UI/Tooltip/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="tooltipCatalogIds.BASIC">
    <ShowCase title="Basic" code="" :vueCode="tooltipBasicVueCode" :reactCode="tooltipBasicReactCode">
      <Tooltip>
        <template #title>
          <Button>Hover me</Button>
        </template>
        <template #content>Tooltip Popup</template>
      </Tooltip>
    </ShowCase>
  </AnchorContent>
</template>
