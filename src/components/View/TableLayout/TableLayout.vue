<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Table, Typography } from '@/components/UI'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface TableLayoutProps {
  id: string
  title?: string
  rootClassName?: string
  dataSource: ComponentApi[]
}

withDefaults(defineProps<TableLayoutProps>(), {
  rootClassName: '',
  dataSource: () => []
})

const t = useLangStore()

const layout = useLayoutStore()

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
  <AnchorContent :id="id" :rootClassName="rootClassName">
    <Paragraph :lineHeight="40">
      {{ title }}
    </Paragraph>
    <Table rootClassName="table-layout" :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
