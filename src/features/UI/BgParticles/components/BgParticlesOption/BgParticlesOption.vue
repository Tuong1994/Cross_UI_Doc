<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import { bgParticlesCatalogIds } from '@/features/UI/BgParticles/repository/catalogIds'
import { bgParticlesOptionReactCode, bgParticlesOptionVueCode } from './code'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useParticles from '@/components/UI/BgAnimation/BgParticles/useParticles'
import utils from '@/utils'

const { BgParticles } = BgAnimation

const { linksOptions, bubbleOptions, collideOptions, grabsOptions, twinkleOptions } = useParticles({
  fullScreen: false,
  hasColor: true,
  color: 'purple'
})

const options = [
  { id: 'links', type: linksOptions.value },
  { id: 'bubble', type: bubbleOptions.value },
  { id: 'collide', type: collideOptions.value },
  { id: 'grabs', type: grabsOptions.value },
  { id: 'twinkle', type: twinkleOptions.value }
]
</script>

<template>
  <AnchorContent :id="bgParticlesCatalogIds.OPTION">
    <ShowCase title="Option" :vueCode="bgParticlesOptionVueCode" :reactCode="bgParticlesOptionReactCode">
      <template v-for="option in options" :key="option">
        <Divider>{{ utils.capitalizeFirstLetter(option.id) }}</Divider>
        <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
          <BgParticles :id="option.id" :options="option.type" />
        </div>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
