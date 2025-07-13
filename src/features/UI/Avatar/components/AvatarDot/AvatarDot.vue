<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarDotCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50

const avatarColors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.DOT">
    <ShowCase title="Dot" :code="avatarDotCode">
      <Space>
        <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" dot />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
