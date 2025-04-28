<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarBadgeCode } from './code'
import { avatarCatalogIds } from '@/features/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.BADGE">
    <ShowCase title="Badge" :code="avatarBadgeCode">
      <Space>
        <Avatar :size="avatarSize" badge="1" />
        <Avatar :size="avatarSize" badge="999999" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
