<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarSizeReactCode, avatarSizeVueCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.SIZE">
    <ShowCase title="Size" code="" :vueCode="avatarSizeVueCode" :reactCode="avatarSizeReactCode">
      <Space>
        <Avatar :size="20" />
        <Avatar :size="40" />
        <Avatar :size="60" />
        <Avatar :size="80" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
