<script setup lang="ts">
import { Space, Badge } from '@/components/UI'
import { badgeGhostCode } from './code'
import { badgeCatalogIds } from '@/features/UI/Badge/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="badgeCatalogIds.GHOST">
    <ShowCase title="Ghost" :code="badgeGhostCode">
      <Space>
        <Badge v-for="color in colors" :key="color" :color="color" ghost>Badge</Badge>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
