<script setup lang="ts">
import { defineProps } from 'vue'
import { Typography, Space, Divider } from '@/components/UI'
import CodeLine from '../Code/CodeLine.vue'
import useLangStore from '@/stores/LangStore'

const { Title, Paragraph } = Typography

interface PageLayoutProps {
  title?: string
  desc?: string
  importCode?: string
}

defineProps<PageLayoutProps>()

const t = useLangStore()
</script>

<template>
  <Title>
    {{ title }}
  </Title>
  <Paragraph>
    {{ desc }}
  </Paragraph>
  <Space aligns="middle" rootClassName="page-layout-import">
    <Paragraph variant="secondary">Import</Paragraph>
    <CodeLine :code="importCode as string" />
  </Space>
  <Paragraph :size="18" :weight="600">
    {{ t.lang.common.examples }}
  </Paragraph>
  <Divider />
  <slot></slot>
</template>
