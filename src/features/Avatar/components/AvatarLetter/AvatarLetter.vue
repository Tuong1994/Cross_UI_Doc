<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
import { avatarLetterCode } from './code'
import { avatarCatalogIds } from '@/features/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.LETTER">
    <ShowCase title="Letter" :code="avatarLetterCode">
      <Space>
        <Avatar :size="avatarSize" letter="Apple" />
        <Avatar :size="avatarSize" letter="Banana" />
        <Avatar :size="avatarSize" letter="C" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
