<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import { checkboxSizeReactCode, checkboxSizeVueCode } from './code'
import { checkboxCatalogIds } from '@/features/Control/CheckBox/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <AnchorContent :id="checkboxCatalogIds.SIZE">
    <ShowCase title="Size" code="" :vueCode="checkboxSizeVueCode" :reactCode="checkboxSizeReactCode">
      <Space>
        <CheckBox
          v-for="size in helper.getSizeType()"
          :key="size"
          :sizes="size as ComponentSize"
          color="green"
        >
          {{ sizeContent(size) }}
        </CheckBox>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
