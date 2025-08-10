<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarLetterReactCode, avatarLetterVueCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.LETTER">
    <ShowCase title="Letter" :vueCode="avatarLetterVueCode" :reactCode="avatarLetterReactCode">
      <Space>
        <Avatar :size="avatarSize" letter="Apple" />
        <Avatar :size="avatarSize" letter="Banana" />
        <Avatar :size="avatarSize" letter="C" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
