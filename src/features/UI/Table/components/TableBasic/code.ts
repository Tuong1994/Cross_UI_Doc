export const tableBasicCode = `  
<script setup lang="ts">
import { Table, Image } from '@/components/UI'
import type { TableColumns } from '@/components/UI/Table/type'

interface TableData {
  id: string
  content: string
  productName: string
}

const dataSource: TableData[] = [
  {
    id: '1',
    content: 'This is a comment 1',
    productName: 'Product 1',
  },
  {
    id: '2',
    content: 'This is a comment 2',
    productName: 'Product 2',
  },
  {
    id: '3',
    content: 'This is a comment 3',
    productName: 'Product 3',
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
  <Table
    :dataSource="dataSource"
    :columns="columns"
  />
</template>
`
