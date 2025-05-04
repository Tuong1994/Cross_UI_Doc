<script setup lang="ts">
import { Space, Badge } from '@/components/UI'
import { badgeColorCode } from './code'
import { badgeCatalogIds } from '@/features/Badge/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="badgeCatalogIds.COLOR">
    <ShowCase title="Color" :code="badgeColorCode">
      <Space>
        <Badge v-for="color in colors" :key="color" :color="color">Badge</Badge>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
