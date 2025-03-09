<script setup lang="ts">
import { Icon, Space } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { iconBasicCode } from './code'
import { iconCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="iconCatalogIds.BASIC">
    <ShowCase title="Basic" :code="iconBasicCode">
      <Space>
        <Icon :iconName="iconName.USER" />
        <Icon :iconName="iconName.GEAR" />
        <Icon :iconName="iconName.GLOBE" />
        <Icon :iconName="iconName.BELL" />
        <Icon :iconName="iconName.BOOKMARK" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
