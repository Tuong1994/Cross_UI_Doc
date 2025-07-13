<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import CardApi from '@/features/UI/Card/components/CardApi/CardApi.vue'
import CardBasic from '@/features/UI/Card/components/CardBasic/CardBasic.vue'
import CardHead from '@/features/UI/Card/components/CardHead/CardHead.vue'
import CardHoverable from '@/features/UI/Card/components/CardHoverable/CardHoverable.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Card" importCode="import { Card } from '@/components/UI'" :desc="t.lang.card.desc">
    <template #showcase>
      <CardBasic />
      <CardHead />
      <CardHoverable />
    </template>
    <template #api>
      <CardApi />
    </template>
  </PageLayout>
</template>
