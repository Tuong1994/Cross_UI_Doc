<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Table, Tabs, Typography } from '@/components/UI'
import { iconBrandsName, iconType } from '@/components/UI/Icon/constant'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import type { TabsItems } from '@/components/UI/Tabs/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface TableLayoutProps {
  id: string
  title?: string
  rootClassName?: string
  multiple?: boolean
  dataSource?: ComponentApi[]
  dataVue?: ComponentApi[]
  dataReact?: ComponentApi[]
}

withDefaults(defineProps<TableLayoutProps>(), {
  rootClassName: '',
  multiple: true,
  dataSource: () => [],
  dataVue: () => [],
  dataReact: () => []
})

const t = useLangStore()

const layout = useLayoutStore()

const items = computed<TabsItems>(() => [
  {
    id: 'vue',
    label: 'Vue',
    labelIcon: { type: iconType.FAB, iconName: iconBrandsName.VUE },
    comName: 'vue'
  },
  {
    id: 'react',
    label: 'React',
    labelIcon: { type: iconType.FAB, iconName: iconBrandsName.REACT },
    comName: 'react'
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
  <AnchorContent :id="id" :rootClassName="rootClassName">
    <Paragraph :lineHeight="40">
      {{ title }}
    </Paragraph>
    <Table
      v-if="!multiple"
      rootClassName="table-layout"
      :color="layout.color"
      :dataSource="dataSource"
      :columns="columns"
    />
    <Tabs v-else :color="layout.color" :items="items">
      <template #content="tab">
        <Table
          v-if="tab.content.comName === 'vue'"
          rootClassName="table-layout"
          :color="layout.color"
          :dataSource="dataVue"
          :columns="columns"
        />
        <Table
          v-if="tab.content.comName === 'react'"
          rootClassName="table-layout"
          :color="layout.color"
          :dataSource="dataReact"
          :columns="columns"
        />
      </template>
    </Tabs>
  </AnchorContent>
</template>
