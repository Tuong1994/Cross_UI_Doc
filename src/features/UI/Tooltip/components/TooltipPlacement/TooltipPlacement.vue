<script setup lang="ts">
import { Tooltip, Button, Divider, Space } from '@/components/UI'
import { tooltipPlacementReactCode, tooltipPlacementVueCode } from './code'
import { tooltipCatalogIds } from '@/features/UI/Tooltip/repository/catalogIds'
import type { ComponentPlacement } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const placements: ComponentPlacement[] = ['top', 'bottom', 'left', 'right']
</script>

<template>
  <AnchorContent :id="tooltipCatalogIds.PLACEMENT">
    <ShowCase title="Placement" :vueCode="tooltipPlacementVueCode" :reactCode="tooltipPlacementReactCode">
      <template v-for="placement in placements" :key="placement">
        <Divider>{{ placement }}</Divider>
        <Space justify="center">
          <Tooltip :placement="placement">
            <template #title>
              <Button>Hover me</Button>
            </template>
            <template #content>{{ placement }}</template>
          </Tooltip>
        </Space>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
