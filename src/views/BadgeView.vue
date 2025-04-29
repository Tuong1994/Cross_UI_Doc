<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Badge" importCode="import { Badge } from '@/components/UI'" :desc="t.lang.badge.desc">
    <template #showcase></template>
    <template #api></template>
  </PageLayout>
</template>
