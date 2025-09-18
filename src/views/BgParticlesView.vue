<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BgParticlesApi from '@/features/UI/BgParticles/components/BgParticlesApi/BgParticlesApi.vue'
import BgParticlesBasic from '@/features/UI/BgParticles/components/BgParticlesBasic/BgParticlesBasic.vue'
import BgParticlesColor from '@/features/UI/BgParticles/components/BgParticlesColor/BgParticlesColor.vue'
import BgParticlesNote from '@/features/UI/BgParticles/components/BgParticlesNote/BgParticlesNote.vue'
import BgParticlesOption from '@/features/UI/BgParticles/components/BgParticlesOption/BgParticlesOption.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ["import { BgAmination } from '@/components/UI'", 'const { BgParticles } = BgAnimation']
</script>

<template>
  <PageLayout
    title="BG Particles"
    :importCode="importCodes"
    :desc="t.lang.backgrounds.particles.desc.content"
  >
    <template #showcase>
      <BgParticlesNote />
      <BgParticlesBasic />
      <BgParticlesColor />
      <BgParticlesOption />
    </template>
    <template #api>
      <BgParticlesApi />
    </template>
  </PageLayout>
</template>
