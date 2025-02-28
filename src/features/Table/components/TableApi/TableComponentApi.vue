<script setup lang="ts">
import { computed } from 'vue'
import { Table, Typography } from '@/components/UI'
import { tableCataLogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'node',
    props: 'node',
    desc: t.lang.table.api.componentDesc.node,
    type: {
      codes: ['any'],
      elType: ECodeElType.DEFAULT
    },
    default: '-'
  },
  {
    id: 'slotContent',
    props: 'slotContent',
    desc: t.lang.table.api.componentDesc.slotContent,
    type: {
      codes: ['any | undefined'],
      elType: ECodeElType.DEFAULT
    },
    default: '-'
  },
  {
    id: 'props',
    props: 'props',
    desc: t.lang.table.api.componentDesc.props,
    type: {
      codes: ['any | undefined'],
      elType: ECodeElType.DEFAULT
    },
    default: '-'
  }
])

const columns = computed<TableColumns<ComponentApi>>(() => [
  {
    id: 'props',
    title: t.lang.common.table.head.props,
    dataIndex: 'props',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.props,
      props: { strong: true, size: 12 } as ParagraphProps
    })
  },
  {
    id: 'desc',
    title: t.lang.common.table.head.desc,
    dataIndex: 'desc',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.desc,
      props: { size: 12 } as ParagraphProps
    })
  },
  {
    id: 'type',
    title: t.lang.common.table.head.type,
    dataIndex: 'type',
    component: (record) => ({
      node: CodeTableCell,
      props: { codes: record.type.codes, elType: record.type.elType } as CodeTableCellProps
    })
  },
  {
    id: 'default',
    title: t.lang.common.table.head.default,
    dataIndex: 'default',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.default,
      props: { size: 12 } as ParagraphProps
    })
  }
])
</script>

<template>
  <AnchorContent :id="tableCataLogIds.COMPONENT_API">
    <Paragraph :lineHeight="40">Table Component</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
