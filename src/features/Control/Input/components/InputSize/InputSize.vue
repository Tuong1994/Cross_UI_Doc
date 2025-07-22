<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { inputSizeCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="inputCatalogIds.SIZE">
    <ShowCase title="Size" :code="inputSizeCode">
      <Space>
        <Input v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
          <template #label>{{ utils.capitalizeFirstLetter(size) }}</template>
        </Input>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
