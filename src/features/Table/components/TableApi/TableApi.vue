<script setup lang="ts">
import { Table, Typography } from '@/components/UI'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const dataSource: ComponentApi[] = [
  {
    id: 'dataSource',
    props: 'dataSource',
    desc: 'Data record array to be displayed',
    type: 'object[]',
    default: '[]'
  },
  {
    id: 'columns',
    props: 'columns',
    desc: 'Columns of table',
    type: 'TableColumns or TableColumn[]',
    default: '[]'
  }
]

const columns: TableColumns<ComponentApi> = [
  {
    id: 'props',
    title: 'Property',
    dataIndex: 'props',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.props,
      props: { strong: true }
    })
  },
  {
    id: 'desc',
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    id: 'type',
    title: 'Type',
    dataIndex: 'type'
  },
  {
    id: 'default',
    title: 'Default',
    dataIndex: 'default'
  }
]
</script>

<template>
  <AnchorContent>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
