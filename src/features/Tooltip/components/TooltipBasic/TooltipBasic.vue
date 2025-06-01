<script setup lang="ts">
import { Tooltip, Button } from '@/components/UI'
import { tooltipBasicCode } from './code'
import { tooltipCatalogIds } from '@/features/Tooltip/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="tooltipCatalogIds.BASIC">
    <ShowCase title="Basic" :code="tooltipBasicCode">
      <Tooltip>
        <template #title>
          <Button>Hover me</Button>
        </template>
        <template #content>Tooltip Popup</template>
      </Tooltip>
    </ShowCase>
  </AnchorContent>
</template>
