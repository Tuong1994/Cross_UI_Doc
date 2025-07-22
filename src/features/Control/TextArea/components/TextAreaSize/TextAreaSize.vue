<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { textareaSizeCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.SIZE">
    <ShowCase title="Size" :code="textareaSizeCode">
      <Space>
        <TextArea v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
          <template #label>{{ utils.capitalizeFirstLetter(size) }}</template>
        </TextArea>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
