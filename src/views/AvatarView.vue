<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import AvatarApi from '@/features/UI/Avatar/components/AvatarApi/AvatarApi.vue'
import AvatarBadge from '@/features/UI/Avatar/components/AvatarBadge/AvatarBadge.vue'
import AvatarBasic from '@/features/UI/Avatar/components/AvatarBasic/AvatarBasic.vue'
import AvatarColor from '@/features/UI/Avatar/components/AvatarColor/AvatarColor.vue'
import AvatarDot from '@/features/UI/Avatar/components/AvatarDot/AvatarDot.vue'
import AvatarLetter from '@/features/UI/Avatar/components/AvatarLetter/AvatarLetter.vue'
import AvatarShape from '@/features/UI/Avatar/components/AvatarShape/AvatarShape.vue'
import AvatarSize from '@/features/UI/Avatar/components/AvatarSize/AvatarSize.vue'
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
