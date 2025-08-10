<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { tabsCatalogIds } from '../../respository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: t.lang.tabs.api.tabsDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.yes,
    default: 'horizontal'
  },
  {
    id: 'items',
    props: 'items',
    desc: t.lang.tabs.api.tabsDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: tabsCatalogIds.ITEM_API,
      codes: ['TabsItems']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.tabs.api.tabsDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.tabs.api.tabsDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headClassName',
    props: 'headClassName',
    desc: t.lang.tabs.api.tabsDesc.headClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentClassName',
    props: 'contentClassName',
    desc: t.lang.tabs.api.tabsDesc.contentClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: t.lang.tabs.api.tabsDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headStyle',
    props: 'headStyle',
    desc: t.lang.tabs.api.tabsDesc.headStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentStyle',
    props: 'contentStyle',
    desc: t.lang.tabs.api.tabsDesc.contentStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSelectTab',
    props: '@onSelectTab',
    desc: t.lang.tabs.api.tabsDesc.onSelectTab,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(tab: TabsItem) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: t.lang.tabs.api.tabsDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.yes,
    default: 'horizontal'
  },
  {
    id: 'items',
    props: 'items',
    desc: t.lang.tabs.api.tabsDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: tabsCatalogIds.ITEM_API,
      codes: ['TabsItems']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.tabs.api.tabsDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'defaultActiveId',
    props: 'defaultActiveId',
    desc: t.lang.tabs.api.tabsDesc.defaultActiveId,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.tabs.api.tabsDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headClassName',
    props: 'headClassName',
    desc: t.lang.tabs.api.tabsDesc.headClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentClassName',
    props: 'contentClassName',
    desc: t.lang.tabs.api.tabsDesc.contentClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'style',
    desc: t.lang.tabs.api.tabsDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headStyle',
    props: 'headStyle',
    desc: t.lang.tabs.api.tabsDesc.headStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentStyle',
    props: 'contentStyle',
    desc: t.lang.tabs.api.tabsDesc.contentStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSelectTab',
    props: '@onSelectTab',
    desc: t.lang.tabs.api.tabsDesc.onSelectTab,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(tab: TabsItem) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Tabs"
    rootClassName="section-space"
    :id="tabsCatalogIds.TABS_API"
    :dataVue="dataVue"
    :dataReact="dataReact"
  />
</template>
