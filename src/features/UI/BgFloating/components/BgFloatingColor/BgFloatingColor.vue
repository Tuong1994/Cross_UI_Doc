<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import { bgFloatingColorReactCode, bgFloatingColorVueCode } from './code'
import { bgFloatingCatalogIds } from '@/features/UI/BgFloating/repository/catelogIds'
import type { LayoutColor } from '@/components/UI/Layout/type'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import helper from '@/helper'
import utils from '@/utils'

const { BgFloating } = BgAnimation

const colors = helper.getColorType()
</script>

<template>
  <AnchorContent :id="bgFloatingCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="bgFloatingColorVueCode" :reactCode="bgFloatingColorReactCode">
      <template v-for="(color, idx) in colors" :key="color">
        <Divider>
          {{ utils.capitalizeFirstLetter(color) }}
        </Divider>
        <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
          <BgFloating :color="color as LayoutColor" />
        </div>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
