<script setup lang="ts">
import { Space, Badge } from '@/components/UI'
import { badgeBasicCode } from './code'
import { badgeCatalogIds } from '@/features/Badge/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="badgeCatalogIds.BASIC">
    <ShowCase title="Basic" :code="badgeBasicCode">
      <Space>
        <Badge>Badge</Badge>
        <Badge ghost>Badge</Badge>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
