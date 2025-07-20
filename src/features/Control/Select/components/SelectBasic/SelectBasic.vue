<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@/components/Control'
import { Space } from '@/components/UI'
import { selectBasicCode } from './code'
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
  <AnchorContent :id="selectCatalogIds.BASIC">
    <ShowCase title="Basic" :code="selectBasicCode">
      <Space>
        <Select color="green" :options="options" />
        <Select color="green" :options="options" loading />
        <Select color="green" :options="options" disabled />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
