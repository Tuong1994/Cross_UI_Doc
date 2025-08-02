<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import { avatarShapeReactCode, avatarShapeVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.SHAPE">
    <ShowCase title="Shape" code="" :vueCode="avatarShapeVueCode" :reactCode="avatarShapeReactCode">
      <Space>
        <Avatar :size="avatarSize" shape="circle" />
        <Avatar :size="avatarSize" shape="square" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
