<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { inputShapeReactCode, inputShapeVueCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="inputCatalogIds.SHAPE">
    <ShowCase title="Shape" code="" :vueCode="inputShapeVueCode" :reactCode="inputShapeReactCode">
      <Space>
        <Input
          v-for="shape in helper.getShapeType()"
          :key="shape"
          :shape="shape as ControlShape"
          color="green"
        >
          <template #label>{{ utils.capitalizeFirstLetter(shape) }}</template>
        </Input>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
