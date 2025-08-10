<script setup lang="ts">
import { computed } from 'vue'
import { layoutCatalogIds } from '@/features/UI/Layout/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'theme',
    props: 'theme',
    desc: t.lang.layout.api.containerDesc.theme,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['dark', 'light']
    },
    required: t.lang.common.required.no,
    default: 'light'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.layout.api.containerDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black')
    },
    required: t.lang.common.required.no,
    default: 'blue'
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
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'theme',
    props: 'theme',
    desc: t.lang.layout.api.containerDesc.theme,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['dark', 'light']
    },
    required: t.lang.common.required.no,
    default: 'light'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.layout.api.containerDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black')
    },
    required: t.lang.common.required.no,
    default: 'blue'
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
  }
])
</script>

<template>
  <TableLayout
    title="Container"
    rootClassName="section-space"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="layoutCatalogIds.CONTAINER_API"
  />
</template>
