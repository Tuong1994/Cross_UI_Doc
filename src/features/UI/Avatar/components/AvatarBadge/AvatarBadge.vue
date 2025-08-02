<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarBadgeReactCode, avatarBadgeVueCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.BADGE">
    <ShowCase title="Badge" code="" :vueCode="avatarBadgeVueCode" :reactCode="avatarBadgeReactCode">
      <Space>
        <Avatar :size="avatarSize" badge="1" />
        <Avatar :size="avatarSize" badge="999999" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
