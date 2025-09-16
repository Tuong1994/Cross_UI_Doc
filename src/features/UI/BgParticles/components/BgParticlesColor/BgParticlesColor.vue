<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import { bgParticlesCatalogIds } from '@/features/UI/BgParticles/repository/catalogIds'
import { bgParticlesColorReactCode, bgParticlesColorVueCode } from './code'
import type { LayoutColor } from '@/components/UI/Layout/type'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import helper from '@/helper'
import utils from '@/utils'

const { BgParticles } = BgAnimation
</script>

<template>
  <AnchorContent :id="bgParticlesCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="bgParticlesColorVueCode" :reactCode="bgParticlesColorReactCode">
      <template v-for="color in helper.getColorType()" :key="color">
        <Divider>{{ utils.capitalizeFirstLetter(color) }}</Divider>
        <div
          :style="{
            width: '100%',
            height: '300px',
            borderRadius: '6px',
            overflow: 'hidden'
          }"
        >
          <BgParticles :fullScreen="false" hasColor :color="color as LayoutColor" :id="color" />
        </div>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
