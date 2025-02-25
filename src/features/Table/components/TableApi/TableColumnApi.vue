<script setup lang="ts">
import { Typography } from '@/components/UI'
import { tableCataLogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="tableCataLogIds.COLUMN_API">
    <Paragraph :lineHeight="40">Column</Paragraph>
  </AnchorContent>
</template>
