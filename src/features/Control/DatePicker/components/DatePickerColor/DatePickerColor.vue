<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import { datepickerColorReactCode, datepickerColorVueCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.COLOR">
    <ShowCase title="Color" code="" :vueCode="datepickerColorVueCode" :reactCode="datepickerColorReactCode">
      <Space>
        <DatePicker
          v-for="color in helper.getColorType()"
          :key="color"
          :color="color as ControlColor"
          :rootStyle="{ width: '150px' }"
        >
          <template #label>
            {{ utils.capitalizeFirstLetter(color) }}
          </template>
        </DatePicker>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
