<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import BadgeApi from '@/features/UI/Badge/components/BadgeApi/BadgeApi.vue'
import BadgeBasic from '@/features/UI/Badge/components/BadgeBasic/BadgeBasic.vue'
import BadgeColor from '@/features/UI/Badge/components/BadgeColor/BadgeColor.vue'
import BadgeGhost from '@/features/UI/Badge/components/BadgeGhost/BadgeGhost.vue'
import BadgeShape from '@/features/UI/Badge/components/BadgeShape/BadgeShape.vue'
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
