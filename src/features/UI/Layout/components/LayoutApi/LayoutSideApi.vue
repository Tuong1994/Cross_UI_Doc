<script setup lang="ts">
import { computed } from 'vue'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'collapsable',
    props: 'collapsable',
    desc: t.lang.layout.api.sideDesc.collapsable,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasCollapseButton',
    props: 'hasCollapseButton',
    desc: t.lang.layout.api.sideDesc.hasCollapseButton,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.layout.api.commonDesc.rootClassName,
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
    desc: t.lang.layout.api.commonDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCollapse',
    props: '@onCollapse',
    desc: t.lang.layout.api.sideDesc.onCollapse,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(collapse: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: 'true'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'collapsable',
    props: 'collapsable',
    desc: t.lang.layout.api.sideDesc.collapsable,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasCollapseButton',
    props: 'hasCollapseButton',
    desc: t.lang.layout.api.sideDesc.hasCollapseButton,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.layout.api.commonDesc.rootClassName,
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
    desc: t.lang.layout.api.commonDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCollapse',
    props: '@onCollapse',
    desc: t.lang.layout.api.sideDesc.onCollapse,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(collapse: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: 'true'
  }
])
</script>

<template>
  <TableLayout
    title="Side"
    rootClassName="section-space"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="layoutCatalogIds.SIDE_API"
  />
</template>
