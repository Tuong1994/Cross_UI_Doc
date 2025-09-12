<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BgFloatingApi from '@/features/UI/BgFloating/components/BgFloatingApi/BgFloatingApi.vue'
import BgFloatingBasic from '@/features/UI/BgFloating/components/BgFloatingBasic/BgFloatingBasic.vue'
import BgFloatingColor from '@/features/UI/BgFloating/components/BgFloatingColor/BgFloatingColor.vue'
import BgFloatingShape from '@/features/UI/BgFloating/components/BgFloatingShape/BgFloatingShape.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ["import { BgAnimation } from '@/components/UI'", 'const { BgFloating } = BgAnimation']
</script>

<template>
  <PageLayout title="BG Floating" :importCode="importCodes" :desc="t.lang.backgrounds.floating.desc">
    <template #showcase>
      <BgFloatingBasic />
      <BgFloatingColor />
      <BgFloatingShape />
    </template>
    <template #api>
      <BgFloatingApi />
    </template>
  </PageLayout>
</template>
