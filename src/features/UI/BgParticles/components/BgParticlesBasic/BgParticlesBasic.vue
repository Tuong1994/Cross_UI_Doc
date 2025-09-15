<script setup lang="ts">
import { BgAnimation } from '@/components/UI'
import { bgParticlesCatalogIds } from '@/features/UI/BgParticles/repository/catalogIds'
import { bgParticlesBasicReactCode, bgParticlesBasicVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { BgParticles } = BgAnimation
</script>

<template>
  <AnchorContent :id="bgParticlesCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="bgParticlesBasicVueCode" :reactCode="bgParticlesBasicReactCode">
      <div
        :style="{
          width: '100%',
          height: '300px',
          border: '1px solid #eee',
          borderRadius: '6px',
          overflow: 'hidden'
        }"
      >
        <BgParticles :fullScreen="false" />
      </div>
    </ShowCase>
  </AnchorContent>
</template>
