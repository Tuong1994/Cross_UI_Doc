<script setup lang="ts">
import { Typography, Table, Space, Image } from '@/components/UI'
import type { TableColumns } from '@/components/UI/Table/type'
import { tableBasicCode } from '@/features/Table/code'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import CodeLine from '@/components/View/Code/CodeLine.vue'
import useLangStore from '@/stores/LangStore'

const { Title, Paragraph } = Typography

interface TableData {
  id: string
  content: string
  productName: string
  child: TableData[]
}

const t = useLangStore()

const dataSource: TableData[] = [
  {
    id: '1',
    content: 'This is a comment 1',
    productName: 'Product 1',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      },
      {
        id: 'child-3',
        content: 'This is a child comment 3',
        productName: 'Product 3',
        child: []
      }
    ]
  },
  {
    id: '2',
    content: 'This is a comment 2',
    productName: 'Product 2',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      }
    ]
  },
  {
    id: '3',
    content: 'This is a comment 3',
    productName: 'Product 3',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      }
    ]
  }
]

const columns: TableColumns<TableData> = [
  {
    id: 'id',
    title: 'Image',
    dataIndex: 'id',
    component: () => ({
      node: Image,
      props: { imgWidth: 50, imgHeight: 50 }
    })
  },
  {
    id: 'content',
    title: 'Content',
    dataIndex: 'content'
  },
  {
    id: 'productName',
    title: 'Product name',
    dataIndex: 'productName'
  }
]
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
  <Table
    :dataSource="dataSource"
    :columns="columns"
    hasRowSelection
    hasExpand
    hasPagination
    :paginationProps="{ hasContent: true }"
  >
    <template #expand="com">
      <Table :dataSource="com.expand.data.child" :columns="columns" />
    </template>
  </Table>

  <CodeBlock :code="tableBasicCode" />
</template>
