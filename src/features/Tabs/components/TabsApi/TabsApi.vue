<script setup lang="ts">
import { computed } from 'vue'
import { Table, Typography } from '@/components/UI'
import { ECodeElType } from '@/components/View/Code/enum'
import { tabsCatalogIds } from '../../respository/catalogIds'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

// rootClassName?: string
//   headClassName?: string
//   contentClassName?: string
//   rootStyle?: StyleValue
//   headStyle?: StyleValue
//   contentStyle?: StyleValue

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: 'Type of tabs',
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: 'yes',
    default: 'horizontal'
  },
  {
    id: 'items',
    props: 'items',
    desc: 'List of tabs need to display',
    type: {
      elType: ECodeElType.ANCHOR,
      link: tabsCatalogIds.ITEMS_API,
      codes: ['TabsItems']
    },
    required: 'yes',
    default: '[]'
  },
  {
    id: 'color',
    props: 'color',
    desc: 'Color of tabs',
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['blue', 'green', 'red', 'orange', 'yellow', 'pink', 'purple']
    },
    required: 'no',
    default: 'blue'
  },
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
      props: {
        codes: record.type.codes,
        elType: record.type.elType,
        link: record.type.link
      } as CodeTableCellProps
    })
  },
  {
    id: 'required',
    title: t.lang.common.table.head.required,
    dataIndex: 'required',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.required,
      props: { size: 12 } as ParagraphProps
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
  <AnchorContent :id="tabsCatalogIds.TABS_API">
    <Paragraph :lineHeight="40">Tabs</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
