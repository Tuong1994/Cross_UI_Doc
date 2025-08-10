<script setup lang="ts">
import { Table, Image } from '@/components/UI'
import { tableBasicReactCode, tableBasicVueCode } from './code'
import { tableCatalogIds } from '../../repository/catalogIds'
import type { TableColumns } from '@/components/UI/Table/type'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface TableData {
  id: string
  content: string
  productName: string
}

const layout = useLayoutStore()

const dataSource: TableData[] = [
  {
    id: '1',
    content: 'This is a comment 1',
    productName: 'Product 1'
  },
  {
    id: '2',
    content: 'This is a comment 2',
    productName: 'Product 2'
  },
  {
    id: '3',
    content: 'This is a comment 3',
    productName: 'Product 3'
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
  <AnchorContent :id="tableCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="tableBasicVueCode" :reactCode="tableBasicReactCode">
      <Table :dataSource="dataSource" :columns="columns" :color="layout.color" />
    </ShowCase>
  </AnchorContent>
</template>
