<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { toastHookCode, toastHookUsageCode, toastStoreCode, toastTypeCode } from './code'
import { toastCatalogIds } from '@/features/UI/ToastMessage/repository/catalogIds'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="toastCatalogIds.HOOK">
    <Paragraph rootClassName="section-space" :size="18" :weight="600">useMessage</Paragraph>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">{{ t.lang.toast.usage }}</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="toastHookUsageCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">useMessage</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/useMessage</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="toastHookCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">useMessage</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/useMessage</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="toastHookCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">ToastStore</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/ToastStore</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="toastStoreCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph :size="16">Type</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/type</Paragraph>
      </template>
      <template #body>
        <CodeBlock :code="toastTypeCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
