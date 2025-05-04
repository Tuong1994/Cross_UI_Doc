<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BadgeApi from '@/features/Badge/components/BadgeApi/BadgeApi.vue'
import BadgeBasic from '@/features/Badge/components/BadgeBasic/BadgeBasic.vue'
import BadgeColor from '@/features/Badge/components/BadgeColor/BadgeColor.vue'
import BadgeGhost from '@/features/Badge/components/BadgeGhost/BadgeGhost.vue'
import BadgeShape from '@/features/Badge/components/BadgeShape/BadgeShape.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Badge" importCode="import { Badge } from '@/components/UI'" :desc="t.lang.badge.desc">
    <template #showcase>
      <BadgeBasic />
      <BadgeColor />
      <BadgeGhost />
      <BadgeShape />
    </template>
    <template #api>
      <BadgeApi />
    </template>
  </PageLayout>
</template>
