<script setup lang="ts">
import { Space, Badge } from '@/components/UI'
import { badgeShapeCode } from './code'
import { badgeCatalogIds } from '@/features/UI/Badge/repository/catalogIds'
import type { BadgeColor } from '@/components/UI/Badge/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const colors: BadgeColor[] = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <AnchorContent :id="badgeCatalogIds.SHAPE">
    <ShowCase title="Shape" :code="badgeShapeCode">
      <Space rootClassName="section-space">
        <Badge v-for="color in colors" :key="color" :color="color" shape="square">Badge</Badge>
      </Space>
      <Space rootClassName="section-space">
        <Badge v-for="color in colors" :key="color" :color="color" ghost shape="square">Badge</Badge>
      </Space>
      <Space rootClassName="section-space">
        <Badge v-for="color in colors" :key="color" :color="color" shape="round">Badge</Badge>
      </Space>
      <Space>
        <Badge v-for="color in colors" :key="color" :color="color" ghost shape="round">Badge</Badge>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
