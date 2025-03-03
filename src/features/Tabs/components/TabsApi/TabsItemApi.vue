<script setup lang="ts">
import { computed } from 'vue'
import { Table, Typography } from '@/components/UI'
import { tabsCatalogIds } from '../../respository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

// id: string
//   label: string
//   labelIcon?: string
//   comName: string

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.tabs.api.itemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.tabs.api.itemDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'comName',
    props: 'comName',
    desc: t.lang.tabs.api.itemDesc.comName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'labelIcon',
    props: 'labelIcon',
    desc: t.lang.tabs.api.itemDesc.labelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
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
  <AnchorContent :id="tabsCatalogIds.ITEM_API">
    <Paragraph :lineHeight="40">Item</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
