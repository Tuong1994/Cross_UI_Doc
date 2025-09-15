<script setup lang="ts">
import { Space, Button, Typography } from '@/components/UI'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BgParticlesBasic from '@/features/UI/BgParticles/components/BgParticlesBasic/BgParticlesBasic.vue'
import BgParticlesColor from '@/features/UI/BgParticles/components/BgParticlesColor/BgParticlesColor.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

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
      <Space aligns="middle" :size="2">
        <Paragraph italic>{{ t.lang.backgrounds.particles.desc.prefix }}</Paragraph>
        <Button text>
          <a href="https://particles.js.org/" target="_blank">tsparticles</a>
        </Button>
        <Paragraph italic>{{ t.lang.backgrounds.particles.desc.suffix }}</Paragraph>
      </Space>
      <BgParticlesBasic />
      <BgParticlesColor />
    </template>
    <template #api></template>
  </PageLayout>
</template>
