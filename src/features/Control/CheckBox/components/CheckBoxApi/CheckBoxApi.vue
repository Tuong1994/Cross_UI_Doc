<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { checkboxCatalogIds } from '@/features/Control/CheckBox/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.checkbox.api.checkboxDesc.name,
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
    desc: t.lang.checkbox.api.checkboxDesc.sizes,
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
    desc: t.lang.checkbox.api.checkboxDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'value',
    props: 'value',
    desc: t.lang.checkbox.api.checkboxDesc.value,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number', 'boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.checkbox.api.checkboxDesc.disabled,
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
    desc: t.lang.checkbox.api.checkboxDesc.required,
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
    desc: t.lang.checkbox.api.checkboxDesc.optional,
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
    desc: t.lang.checkbox.api.checkboxDesc.rule,
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
    desc: t.lang.checkbox.api.checkboxDesc.rootClassName,
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
    desc: t.lang.checkbox.api.checkboxDesc.labelClassName,
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
    desc: t.lang.checkbox.api.checkboxDesc.controlClassName,
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
    desc: t.lang.checkbox.api.checkboxDesc.rootStyle,
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
    desc: t.lang.checkbox.api.checkboxDesc.labelStyle,
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
    desc: t.lang.checkbox.api.checkboxDesc.controlStyle,
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
    id: 'onInput',
    props: '@onInput',
    desc: t.lang.checkbox.api.checkboxDesc.onInput,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string | number | boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCheck',
    props: '@onCheck',
    desc: t.lang.checkbox.api.checkboxDesc.onCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(checked: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout title="CheckBox" :dataSource="dataSource" :id="checkboxCatalogIds.CHECKBOX_API" />
</template>
