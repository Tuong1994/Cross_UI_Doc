<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import LayoutNote from '@/features/UI/Layout/components/LayoutNote/LayoutNote.vue'
import LayoutBasic from '@/features/UI/Layout/components/LayoutBasic/LayoutBasic.vue'
import LayoutHook from '@/features/UI/Layout/components/LayoutHook/LayoutHook.vue'
import LayoutContainerApi from '@/features/UI/Layout/components/LayoutApi/LayoutContainerApi.vue'
import LayoutHeadApi from '@/features/UI/Layout/components/LayoutApi/LayoutHeadApi.vue'
import LayoutBodyApi from '@/features/UI/Layout/components/LayoutApi/LayoutBodyApi.vue'
import LayoutSideApi from '@/features/UI/Layout/components/LayoutApi/LayoutSideApi.vue'
import LayoutContentApi from '@/features/UI/Layout/components/LayoutApi/LayoutContentApi.vue'
import LayoutMenuApi from '@/features/UI/Layout/components/LayoutApi/LayoutMenuApi.vue'
import MenuItemApi from '@/features/UI/Layout/components/LayoutApi/MenuItemApi.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = [
  "import { Layout } from '@/components/UI'",
  'const { Container, Head, Side, Body, Menu, Content } = Layout'
]
</script>

<template>
  <PageLayout title="Layout" :importCode="importCodes" :desc="t.lang.layout.desc">
    <template #showcase>
      <LayoutNote />
      <LayoutBasic />
      <LayoutHook />
    </template>
    <template #api>
      <LayoutContainerApi />
      <LayoutHeadApi />
      <LayoutBodyApi />
      <LayoutSideApi />
      <LayoutContentApi />
      <LayoutMenuApi />
      <MenuItemApi />
    </template>
  </PageLayout>
</template>
