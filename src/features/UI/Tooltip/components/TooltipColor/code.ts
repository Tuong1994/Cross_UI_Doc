export const tooltipColorCode = `
<script setup lang="ts">
import { Tooltip, Space, Button } from '@/components/UI'
import type { TooltipColor } from '@/components/UI/Tooltip/type'

const colors: TooltipColor[] = ['blue', 'red', 'green', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <Tooltip v-for="color in colors" :key="color" :color="color">
      <template #title>
        <Button :color="color">Hover me</Button>
      </template>
      <template #content>Tooltip Popup</template>
    </Tooltip>
  </Space>
</template>
`