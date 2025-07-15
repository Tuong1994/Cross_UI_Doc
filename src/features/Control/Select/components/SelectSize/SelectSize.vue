<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { selectSizeCode } from './code'
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
  <AnchorContent :id="selectCatalogIds.SIZE">
    <ShowCase title="Size" :code="selectSizeCode">
      <Space>
        <Select sizes="sm" color="green" :options="options">
          <template #label>Small</template>
        </Select>
        <Select sizes="md" color="green" :options="options">
          <template #label>Medium</template>
        </Select>
        <Select sizes="lg" color="green" :options="options">
          <template #label>Large</template>
        </Select>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
