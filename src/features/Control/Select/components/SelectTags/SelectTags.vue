<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { SelectTag } from '@/components/Control'
import { selectTagsReactCode, selectTagsVueCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const handleSelect = (tags: (string | number | boolean)[]) => {
  console.log(tags)
}
</script>

<template>
  <AnchorContent :id="selectCatalogIds.TAGS">
    <ShowCase title="Tags" :vueCode="selectTagsVueCode" :reactCode="selectTagsReactCode"> 
      <Space>
        <SelectTag
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as ControlColor"
          :options="options"
          @onChangeSelect="handleSelect"
        >
          <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
        </SelectTag>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>

