<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { switchCatalogIds } from '@/features/UI/Switch/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'switched',
    props: 'switched',
    desc: t.lang.switch.api.switchDesc.switched,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.switch.api.switchDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.switch.api.switchDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.switch.api.switchDesc.rootClassName,
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
    desc: t.lang.switch.api.switchDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSwitch',
    props: '@onSwitch',
    desc: t.lang.switch.api.switchDesc.onSwitch,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(switched: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'switched',
    props: 'switched',
    desc: t.lang.switch.api.switchDesc.switched,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.switch.api.switchDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.switch.api.switchDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.switch.api.switchDesc.rootClassName,
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
    desc: t.lang.switch.api.switchDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSwitch',
    props: '@onSwitch',
    desc: t.lang.switch.api.switchDesc.onSwitch,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(switched: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Switch" :dataVue="dataVue" :dataReact="dataReact" :id="switchCatalogIds.SWITCH_API" />
</template>
