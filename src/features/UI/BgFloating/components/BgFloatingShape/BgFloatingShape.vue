<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import { bgFloatingCatalogIds } from '@/features/UI/BgFloating/repository/catelogIds'
import { bgFloatingShapeReactCode, bgFloatingShapeVueCode } from './code'
import type { BgFloatingShape } from '@/components/UI/BgAnimation/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { BgFloating } = BgAnimation

const shapes = helper.getShapeType()
</script>

<template>
  <AnchorContent :id="bgFloatingCatalogIds.SHAPE">
    <ShowCase title="Shape" :vueCode="bgFloatingShapeVueCode" :reactCode="bgFloatingShapeReactCode">
      <template v-for="shape in shapes" :key="shape">
        <Divider>
          {{ utils.capitalizeFirstLetter(shape) }}
        </Divider>
        <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
          <BgFloating color="purple" :shape="shape as BgFloatingShape" />
        </div>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
