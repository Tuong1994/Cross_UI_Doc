<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { TreeSelect } from '@/components/Control'
import { selectTreeCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const options = computed<SelectOptions>(() => [
  {
    label: 'Item 1',
    value: 1,
    children: [
      { label: 'Item child 1', value: 4 },
      { label: 'Item child 2', value: 5 },
      { label: 'Item child 3', value: 6 }
    ]
  },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
  <AnchorContent :id="selectCatalogIds.TREE">
    <ShowCase title="Tree" :code="selectTreeCode">
      <Space>
        <TreeSelect
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as ControlColor"
          :options="options"
        >
          <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
        </TreeSelect>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
