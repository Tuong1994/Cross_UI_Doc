<script setup lang="ts">
import { computed } from 'vue'
import { bgFloatingCatalogIds } from '@/features/UI/BgFloating/repository/catelogIds'
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.backgrounds.floating.api.floatingDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['circle', 'square']
    },
    required: t.lang.common.required.no,
    default: 'circle'
  },
  {
    id: 'count',
    props: 'count',
    desc: t.lang.backgrounds.floating.api.floatingDesc.count,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '80'
  },
  {
    id: 'zIndex',
    props: 'zIndex',
    desc: t.lang.backgrounds.floating.api.floatingDesc.zIndex,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '0'
  },
  {
    id: 'fullScreen',
    props: 'fullScreen',
    desc: t.lang.backgrounds.floating.api.floatingDesc.fullScreen,
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.rootClassName,
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.rootStyle,
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.backgrounds.floating.api.floatingDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['circle', 'square']
    },
    required: t.lang.common.required.no,
    default: 'circle'
  },
  {
    id: 'count',
    props: 'count',
    desc: t.lang.backgrounds.floating.api.floatingDesc.count,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '80'
  },
  {
    id: 'zIndex',
    props: 'zIndex',
    desc: t.lang.backgrounds.floating.api.floatingDesc.zIndex,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '0'
  },
  {
    id: 'fullScreen',
    props: 'fullScreen',
    desc: t.lang.backgrounds.floating.api.floatingDesc.fullScreen,
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.rootClassName,
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
    desc: t.lang.backgrounds.floating.api.floatingDesc.rootStyle,
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
    title="BG Floating"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="bgFloatingCatalogIds.BG_FLOATING_API"
  />
</template>
