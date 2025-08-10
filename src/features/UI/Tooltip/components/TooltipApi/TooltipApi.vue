<script setup lang="ts">
import { computed } from 'vue'
import { tooltipCatalogIds } from '@/features/UI/Tooltip/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.tooltip.api.tooltipDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black')
    },
    required: t.lang.common.required.no,
    default: 'black'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.tooltip.api.tooltipDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['top', 'bottom', 'left', 'right']
    },
    required: t.lang.common.required.no,
    default: 'bottom'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.tooltip.api.tooltipDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'titleClassName',
    props: 'titleClassName',
    desc: t.lang.tooltip.api.tooltipDesc.titleClassName,
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
    desc: t.lang.tooltip.api.tooltipDesc.contentClassName,
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
    desc: t.lang.tooltip.api.tooltipDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'titleStyle',
    props: 'titleStyle',
    desc: t.lang.tooltip.api.tooltipDesc.titleStyle,
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
    desc: t.lang.tooltip.api.tooltipDesc.contentStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.tooltip.api.tooltipDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black')
    },
    required: t.lang.common.required.no,
    default: 'black'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.tooltip.api.tooltipDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['top', 'bottom', 'left', 'right']
    },
    required: t.lang.common.required.no,
    default: 'bottom'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.tooltip.api.tooltipDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'titleClassName',
    props: 'titleClassName',
    desc: t.lang.tooltip.api.tooltipDesc.titleClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentClassName',
    props: 'labelClassName',
    desc: t.lang.tooltip.api.tooltipDesc.contentClassName,
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
    desc: t.lang.tooltip.api.tooltipDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'titleStyle',
    props: 'titleStyle',
    desc: t.lang.tooltip.api.tooltipDesc.titleStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentStyle',
    props: 'labelStyle',
    desc: t.lang.tooltip.api.tooltipDesc.contentStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Tooltip"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="tooltipCatalogIds.TOOLTIP_API"
  />
</template>
