<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { layoutHookCode } from './code'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="layoutCatalogIds.HOOK">
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph strong :size="16">useLayoutStore</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="layoutHookCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
