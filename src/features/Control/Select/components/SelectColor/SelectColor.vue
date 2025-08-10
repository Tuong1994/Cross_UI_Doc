<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { selectColorReactCode, selectColorVueCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import utils from '@/utils'

const colors = computed<ControlColor[]>(() => ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink'])

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
  <AnchorContent :id="selectCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="selectColorVueCode" :reactCode="selectColorReactCode">
      <Space>
        <Select v-for="color in colors" :key="color" :color="color" :options="options">
          <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
        </Select>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
