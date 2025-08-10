<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { selectShapeReactCode, selectShapeVueCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { SelectOptions } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
  <AnchorContent :id="selectCatalogIds.SHAPE">
    <ShowCase title="Shape" :vueCode="selectShapeVueCode" :reactCode="selectShapeReactCode">
      <Space>
        <Select shape="square" color="green" :options="options">
          <template #label>Square</template>
        </Select>
        <Select shape="round" color="green" :options="options">
          <template #label>Round</template>
        </Select>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


