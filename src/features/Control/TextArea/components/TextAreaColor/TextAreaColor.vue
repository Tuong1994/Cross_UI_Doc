<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { textareaColorReactCode, textareaColorVueCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="textareaColorVueCode" :reactCode="textareaColorReactCode">
      <Space>
        <TextArea v-for="color in helper.getColorType()" :key="color" :color="color as ControlColor">
          <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
        </TextArea>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
