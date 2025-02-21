<script setup lang="ts">
import { Typography, Table, Space, Image } from '@/components/UI'
import TableBasic from '@/features/Table/Basic/TableBasic.vue'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import CodeLine from '@/components/View/Code/CodeLine.vue'
import useLangStore from '@/stores/LangStore'

const { Title, Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Title>Table</Title>
  <Paragraph>
    {{ t.lang.table.desc }}
  </Paragraph>

  <Space aligns="middle">
    <Paragraph variant="secondary">Import</Paragraph>
    <CodeLine code="import { Table } from @/components/UI" />
  </Space>

  <TableBasic />
</template>
