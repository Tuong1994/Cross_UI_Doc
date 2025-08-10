<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import { datepickerShapeReactCode, datepickerShapeVueCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.SHAPE">
    <ShowCase title="Shape" :vueCode="datepickerShapeVueCode" :reactCode="datepickerShapeReactCode">
      <Space>
        <DatePicker
          v-for="shape in helper.getShapeType()"
          :key="shape"
          :shape="shape as ControlShape"
          :rootStyle="{ width: '200px' }"
          color="green"
        >
          <template #label>
            {{ utils.capitalizeFirstLetter(shape) }}
          </template>
        </DatePicker>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
