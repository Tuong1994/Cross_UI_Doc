<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { selectSizeVueCode, selectSizeReactCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import { useDisplayComponentSize } from '@/hooks'
import type { SelectOptions } from '@/components/Control/type'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <AnchorContent :id="selectCatalogIds.SIZE">
    <ShowCase title="Size" code="" :vueCode="selectSizeVueCode" :reactCode="selectSizeReactCode">
      <Space>
        <Select
          v-for="size in helper.getSizeType()"
          :key="size"
          :sizes="size as ComponentSize"
          color="green"
          :options="options"
        >
          <template #label>{{ sizeContent(size) }}</template>
        </Select>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
