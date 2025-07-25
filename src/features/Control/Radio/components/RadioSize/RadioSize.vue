<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import { radioSizeCode } from './code'
import { radioCatalogIds } from '@/features/Control/Radio/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <AnchorContent :id="radioCatalogIds.SIZE">
    <ShowCase title="Size" :code="radioSizeCode">
      <Space>
        <Radio
          v-for="size in helper.getSizeType()"
          :key="size"
          :sizes="size as ComponentSize"
          name="size"
          color="green"
        >
          {{ sizeContent(size) }}
        </Radio>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
