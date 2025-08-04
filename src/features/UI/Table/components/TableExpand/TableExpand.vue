<script setup lang="ts">
import { Table, Image } from '@/components/UI'
import { tableExpandReactCode, tableExpandVueCode } from './code'
import { tableCatalogIds } from '../../repository/catalogIds'
import type { TableColumns } from '@/components/UI/Table/type'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface TableData {
  id: string
  content: string
  productName: string
  child: TableData[]
}

const layout = useLayoutStore()

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
  <AnchorContent :id="tableCatalogIds.EXPAND">
    <ShowCase title="Expand Table" code="" :vueCode="tableExpandVueCode" :reactCode="tableExpandReactCode">
      <Table :dataSource="dataSource" :columns="columns" :color="layout.color" hasExpand>
        <template #expand="com">
          <Table :dataSource="com.expand.data.child" :columns="columns" :color="layout.color" />
        </template>
      </Table>
    </ShowCase>
  </AnchorContent>
</template>
