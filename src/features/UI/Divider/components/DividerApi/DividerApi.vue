<script setup lang="ts">
import { computed } from 'vue'
import { dividerCatalogIds } from '@/features/UI/Divider/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: t.lang.divider.api.dividerDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.no,
    default: 'horizontal'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.divider.api.dividerDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'plain',
    props: 'plain',
    desc: t.lang.divider.api.dividerDesc.plain,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.divider.api.dividerDesc.rootClassName,
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
    desc: t.lang.divider.api.dividerDesc.rootStyle,
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
    id: 'type',
    props: 'type',
    desc: t.lang.divider.api.dividerDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['horizontal', 'vertical']
    },
    required: t.lang.common.required.no,
    default: 'horizontal'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.divider.api.dividerDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'plain',
    props: 'plain',
    desc: t.lang.divider.api.dividerDesc.plain,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'verticalSize',
    props: 'verticalSize',
    desc: t.lang.divider.api.dividerDesc.verticalSize,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '20'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.divider.api.dividerDesc.rootClassName,
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
    desc: t.lang.divider.api.dividerDesc.rootStyle,
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
    title="Divider"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="dividerCatalogIds.DIVIDER_API"
  />
</template>
