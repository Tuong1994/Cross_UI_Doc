<script setup lang="ts">
import { Space, Avatar, Image } from '@/components/UI'
import { avatarBasicCode } from './code'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const avatarSize = 50
</script>

<template>
  <AnchorContent :id="avatarCatalogIds.BASIC">
    <ShowCase title="Basic" :code="avatarBasicCode">
      <Space>
        <Avatar :size="avatarSize" />
        <Avatar :size="avatarSize" letter="T" />
        <Avatar :size="avatarSize">
          <Image :src="`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&dpr=1`" objectFit="cover" />
        </Avatar>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
