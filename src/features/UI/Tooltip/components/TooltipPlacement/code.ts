export const tooltipPlacementCode = `
<script setup lang="ts">
import { Tooltip, Button, Divider } from '@/components/UI'
import type { ComponentPlacement } from '@/common/type'

const placements: ComponentPlacement[] = ['top', 'bottom', 'left', 'right']
</script>

<template>
  <template v-for="placement in placements" :key="placement">
    <Divider>{{ placement }}</Divider>
    <Tooltip :placement="placement">
      <template #title>
        <Button>Hover me</Button>
      </template>
      <template #content>Tooltip Popup</template>
    </Tooltip>
  </template>
</template>
`
