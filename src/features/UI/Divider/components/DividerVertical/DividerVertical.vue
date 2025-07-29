<script setup lang="ts">
import { Divider, Badge, Space } from '@/components/UI'
import { dividerVerticalCode } from './code'
import { dividerCatalogIds } from '@/features/UI/Divider/repository/catalogIds'
import type { BadgeColor } from '@/components/UI/Badge/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const badges: BadgeColor[] = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="dividerCatalogIds.VERTICAL">
    <ShowCase title="Vertical" :code="dividerVerticalCode">
      <Space>
        <template v-for="(badge, idx) in badges" :key="badge">
          <Badge :color="badge">{{ badge }}</Badge>
          <Divider v-if="idx < badges.length - 1" type="vertical" />
        </template>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
