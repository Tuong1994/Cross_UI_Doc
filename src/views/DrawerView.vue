<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DrawerApi from '@/features/UI/Drawer/components/DrawerApi/DrawerApi.vue'
import DrawerBasic from '@/features/UI/Drawer/components/DrawerBasic/DrawerBasic.vue'
import DrawerFullSize from '@/features/UI/Drawer/components/DrawerFullSize/DrawerFullSize.vue'
import DrawerNoHead from '@/features/UI/Drawer/components/DrawerNoHead/DrawerNoHead.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Drawer" importCode="import { Drawer } from '@/components/UI'" :desc="t.lang.drawer.desc">
    <template #showcase>
      <DrawerBasic />
      <DrawerFullSize />
      <DrawerNoHead />
    </template>
    <template #api>
      <DrawerApi />
    </template>
  </PageLayout>
</template>
