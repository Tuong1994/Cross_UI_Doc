<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { alertCatalogIds } from '@/features/UI/Alert/repository/catalogIds'
import { alertStoreCode, alertTypeCode, useAlertHookCode, useAlertHookUsageCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="alertCatalogIds.HOOK">
    <Paragraph :size="18" :weight="600" rootClassName="section-space">useAlert</Paragraph>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">{{ t.lang.alert.usage }}</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="useAlertHookUsageCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">Hook</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/useAlert</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="useAlertHookCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">AlertStore</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/AlertStore</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="alertStoreCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">Type</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/type</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="alertTypeCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
