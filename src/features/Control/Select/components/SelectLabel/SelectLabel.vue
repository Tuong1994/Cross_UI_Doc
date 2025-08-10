<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import { selectLabelReactCode, selectLabelVueCode } from './code'
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
  <AnchorContent :id="selectCatalogIds.LABEL">
    <ShowCase title="Label" :vueCode="selectLabelVueCode" :reactCode="selectLabelReactCode">
      <Space>
        <Select color="green" :options="options">
          <template #label>Select</template>
        </Select>
        <Select optional color="green" :options="options">
          <template #label>Select optional</template>
        </Select>
        <Select required color="green" :options="options">
          <template #label>Select required</template>
        </Select>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
