<script setup lang="ts">
import { defineProps } from 'vue'
import { Typography, Space, Divider, Flex } from '@/components/UI'
import CodeLine from '../Code/CodeLine.vue'
import useLangStore from '@/stores/LangStore'
import SideCatalogMobile from '../SideCatalog/SideCatalogMobile.vue'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

interface PageLayoutProps {
  title?: string
  desc?: string
  importCode?: string | string[]
}

defineProps<PageLayoutProps>()

const t = useLangStore()
</script>

<template>
  <FlexRow aligns="middle" rootClassName="page-layout-head">
    <FlexCol>
      <Title>
        {{ title }}
      </Title>
    </FlexCol>
    <FlexCol :span="0">
      <SideCatalogMobile />
    </FlexCol>
  </FlexRow>
  <Paragraph>
    {{ desc }}
  </Paragraph>
  <div v-if="Array.isArray(importCode)" class="page-layout-import">
    <Space v-for="(code, idx) in importCode" :key="idx" aligns="middle">
      <Paragraph variant="secondary">Import</Paragraph>
      <CodeLine :code="code" />
    </Space>
  </div>
  <Space v-else aligns="middle" rootClassName="page-layout-import">
    <Paragraph variant="secondary">Import</Paragraph>
    <CodeLine :code="importCode as string" />
  </Space>
  <Paragraph :size="18" :weight="600">
    {{ t.lang.common.examples }}
  </Paragraph>
  <Divider />
  <slot name="showcase"></slot>
  <Paragraph :size="18" :weight="600"> API </Paragraph>
  <Divider />
  <slot name="api"></slot>
</template>
