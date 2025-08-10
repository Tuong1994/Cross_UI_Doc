<script setup lang="ts">
import { computed } from 'vue'
import { accordionCatalogIds } from '@/features/UI/Accordion/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'label',
    props: 'label',
    desc: t.lang.accordion.api.accordionDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'Accordion'
  },
  {
    id: 'labelIcon',
    props: 'labelIcon',
    desc: t.lang.accordion.api.accordionDesc.labelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'iconName.ANGLE_DOWN'
  },
  {
    id: 'extraIcon',
    props: 'extraIcon',
    desc: t.lang.accordion.api.accordionDesc.extraIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'contentId',
    props: 'contentId',
    desc: t.lang.accordion.api.accordionDesc.contentId,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.accordion.api.accordionDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'group']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'bordered',
    props: 'bordered',
    desc: t.lang.accordion.api.accordionDesc.bordered,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'showLabelIcon',
    props: 'showLabelIcon',
    desc: t.lang.accordion.api.accordionDesc.showLabelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'isCollapsed',
    props: 'isCollapsed',
    desc: t.lang.accordion.api.accordionDesc.isCollapsed,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.accordion.api.accordionDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelClassName',
    props: 'labelClassName',
    desc: t.lang.accordion.api.accordionDesc.labelClassName,
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
    desc: t.lang.accordion.api.accordionDesc.contentClassName,
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
    desc: t.lang.accordion.api.accordionDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelStyle',
    props: 'labelStyle',
    desc: t.lang.accordion.api.accordionDesc.labelStyle,
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
    desc: t.lang.accordion.api.accordionDesc.contentStyle,
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
    desc: t.lang.accordion.api.accordionDesc.onCollapse,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( isCollapsed: boolean ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSelect',
    props: '@onSelect',
    desc: t.lang.accordion.api.accordionDesc.onSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'label',
    props: 'label',
    desc: t.lang.accordion.api.accordionDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: 'Accordion'
  },
  {
    id: 'extra',
    props: 'extra',
    desc: t.lang.accordion.api.accordionDesc.extraIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.accordion.api.accordionDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'group']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'bordered',
    props: 'bordered',
    desc: t.lang.accordion.api.accordionDesc.bordered,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'showLabelIcon',
    props: 'hasArrow',
    desc: t.lang.accordion.api.accordionDesc.showLabelIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'isCollapsed',
    props: 'isCollapsed',
    desc: t.lang.accordion.api.accordionDesc.isCollapsed,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.accordion.api.accordionDesc.rootClassName,
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
    desc: t.lang.accordion.api.accordionDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'expandIcon',
    props: '@expandIcon',
    desc: t.lang.accordion.api.accordionDesc.expandIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( isCollapsed: boolean ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCollapse',
    props: '@onCollapse',
    desc: t.lang.accordion.api.accordionDesc.onCollapse,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( isCollapsed: boolean ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Accordion"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="accordionCatalogIds.ACCORDION_API"
  />
</template>
