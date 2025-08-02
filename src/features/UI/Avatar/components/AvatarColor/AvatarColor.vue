<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarColorReactCode, avatarColorVueCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import type { AvatarColor } from '@/components/UI/Avatar/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50

const avatarColors: AvatarColor[] = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.COLOR">
    <ShowCase title="Color" code="" :vueCode="avatarColorVueCode" :reactCode="avatarColorReactCode">
      <Space>
        <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
