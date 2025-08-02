<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarDotReactCode, avatarDotVueCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import type { AvatarColor } from '@/components/UI/Avatar/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50

const avatarColors: AvatarColor[] = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.DOT">
    <ShowCase title="Dot" code="" :vueCode="avatarDotVueCode" :reactCode="avatarDotReactCode">
      <Space>
        <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" dot />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
