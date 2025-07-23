<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import { datepickerSizeCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.SIZE">
    <ShowCase title="Size" :code="datepickerSizeCode">
      <Space>
        <DatePicker
          v-for="size in helper.getSizeType()"
          :key="size"
          :rootStyle="{ width: '200px' }"
          :sizes="size as ComponentSize"
          color="green"
        >
          <template #label>
            {{ utils.capitalizeFirstLetter(size) }}
          </template>
        </DatePicker>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
