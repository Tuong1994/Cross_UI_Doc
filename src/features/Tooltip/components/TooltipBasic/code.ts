export const tooltipBasicCode = `
<script setup lang="ts">
import { Tooltip, Button } from '@/components/UI'
</script>

<template>
  <Tooltip>
    <template #title>
      <Button>Hover me</Button>
    </template>
    <template #content>Tooltip Popup</template>
  </Tooltip>
</template>
`
