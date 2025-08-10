<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { radioCatalogIds } from '@/features/Control/Radio/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.radio.api.radioDesc.name,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.radio.api.radioDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.radio.api.radioDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black', 'white')
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'value',
    props: 'value',
    desc: t.lang.radio.api.radioDesc.value,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'checked',
    props: 'checked',
    desc: t.lang.radio.api.radioDesc.checked,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.radio.api.radioDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'required',
    props: 'required',
    desc: t.lang.radio.api.radioDesc.required,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'optional',
    props: 'optional',
    desc: t.lang.radio.api.radioDesc.optional,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rule',
    props: 'rule',
    desc: t.lang.radio.api.radioDesc.rule,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['FormRule']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.radio.api.radioDesc.rootClassName,
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
    desc: t.lang.radio.api.radioDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlClassName',
    props: 'controlClassName',
    desc: t.lang.radio.api.radioDesc.controlClassName,
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
    desc: t.lang.radio.api.radioDesc.rootStyle,
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
    desc: t.lang.radio.api.radioDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlStyle',
    props: 'controlStyle',
    desc: t.lang.radio.api.radioDesc.controlStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onBlur',
    props: '@onBlur',
    desc: t.lang.textarea.api.textareaDesc.onBlur,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(e: FocusEvent) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCheck',
    props: '@onCheck',
    desc: t.lang.radio.api.radioDesc.onCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string | number) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.radio.api.radioDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.radio.api.radioDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType('black', 'white')
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'value',
    props: 'value',
    desc: t.lang.radio.api.radioDesc.value,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.radio.api.radioDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'required',
    props: 'required',
    desc: t.lang.radio.api.radioDesc.required,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'optional',
    props: 'optional',
    desc: t.lang.radio.api.radioDesc.optional,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'checked',
    props: 'checked',
    desc: t.lang.radio.api.radioDesc.checked,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.radio.api.radioDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.radio.api.radioDesc.rootClassName,
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
    desc: t.lang.radio.api.radioDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlClassName',
    props: 'controlClassName',
    desc: t.lang.radio.api.radioDesc.controlClassName,
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
    desc: t.lang.radio.api.radioDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'labelStyle',
    props: 'labelStyle',
    desc: t.lang.radio.api.radioDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlStyle',
    props: 'controlStyle',
    desc: t.lang.radio.api.radioDesc.controlStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCheck',
    props: '@onCheck',
    desc: t.lang.radio.api.radioDesc.onCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: any) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Radio" :dataVue="dataVue" :dataReact="dataReact" :id="radioCatalogIds.RADIO_API" />
</template>
