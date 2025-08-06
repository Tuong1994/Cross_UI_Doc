<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { textareaShapeReactCode, textareaShapeVueCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.SHAPE">
    <ShowCase title="Shape" code="" :vueCode="textareaShapeVueCode" :reactCode="textareaShapeReactCode">
      <Space>
        <TextArea
          v-for="shape in helper.getShapeType()"
          :key="shape"
          :shape="shape as ControlShape"
          color="green"
        >
          <template #label>{{ utils.capitalizeFirstLetter(shape) }}</template>
        </TextArea>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
