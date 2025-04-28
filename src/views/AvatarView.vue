<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import AvatarApi from '@/features/Avatar/components/AvatarApi/AvatarApi.vue'
import AvatarBadge from '@/features/Avatar/components/AvatarBadge/AvatarBadge.vue'
import AvatarBasic from '@/features/Avatar/components/AvatarBasic/AvatarBasic.vue'
import AvatarColor from '@/features/Avatar/components/AvatarColor/AvatarColor.vue'
import AvatarDot from '@/features/Avatar/components/AvatarDot/AvatarDot.vue'
import AvatarLetter from '@/features/Avatar/components/AvatarLetter/AvatarLetter.vue'
import AvatarShape from '@/features/Avatar/components/AvatarShape/AvatarShape.vue'
import AvatarSize from '@/features/Avatar/components/AvatarSize/AvatarSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Avatar" importCode="import { Avatar } from '@/components/UI'" :desc="t.lang.avatar.desc">
    <template #showcase>
      <AvatarBasic />
      <AvatarColor />
      <AvatarSize />
      <AvatarShape />
      <AvatarBadge />
      <AvatarDot />
      <AvatarLetter />
    </template>
    <template #api>
      <AvatarApi />
    </template>
  </PageLayout>
</template>
