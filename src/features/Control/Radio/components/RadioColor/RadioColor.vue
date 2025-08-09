<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { radioCatalogIds } from '@/features/Control/Radio/repository/catalogIds'
import { radioColorReactCode, radioColorVueCode } from './code'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <AnchorContent :id="radioCatalogIds.COLOR">
    <ShowCase title="Color" code="" :vueCode="radioColorVueCode" :reactCode="radioColorReactCode">
      <Space>
        <Radio v-for="color in helper.getColorType('black', 'white')" :key="color" :color="color as ControlColor" checked>
          {{ utils.capitalizeFirstLetter(color) }}
        </Radio>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
