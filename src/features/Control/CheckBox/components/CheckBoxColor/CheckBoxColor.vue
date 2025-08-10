<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { checkboxCatalogIds } from '@/features/Control/CheckBox/repository/catalogIds'
import { checkboxColorReactCode, checkboxColorVueCode } from './code'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="checkboxCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="checkboxColorVueCode" :reactCode="checkboxColorReactCode">
      <Space>
        <CheckBox v-for="color in helper.getColorType('black', 'white')" :key="color" :color="color as ControlColor" checked>
          {{ utils.capitalizeFirstLetter(color) }}
        </CheckBox>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
