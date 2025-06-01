<script setup lang="ts">
import { Tooltip, Space, Button } from '@/components/UI'
import { tooltipColorCode } from './code'
import { tooltipCatalogIds } from '@/features/Tooltip/repository/catalogIds'
import type { TooltipColor } from '@/components/UI/Tooltip/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const colors: TooltipColor[] = ['blue', 'red', 'green', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="tooltipCatalogIds.COLOR">
    <ShowCase title="Color" :code="tooltipColorCode">
      <Space>
        <Tooltip v-for="color in colors" :key="color" :color="color">
          <template #title>
            <Button :color="color">Hover me</Button>
          </template>
          <template #content>Tooltip Popup</template>
        </Tooltip>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
