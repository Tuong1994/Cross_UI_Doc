<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { layoutBasicCode } from './code'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="layoutCatalogIds.BASIC">
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16" strong>Basic</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="layoutBasicCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
