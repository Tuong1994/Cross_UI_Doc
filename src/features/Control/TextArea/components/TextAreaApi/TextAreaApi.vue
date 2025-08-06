<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.textarea.api.textareaDesc.name,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'placeholder',
    props: 'placeholder',
    desc: t.lang.textarea.api.textareaDesc.placeholder,
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
    desc: t.lang.textarea.api.textareaDesc.sizes,
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
    desc: t.lang.textarea.api.textareaDesc.color,
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
    desc: t.lang.textarea.api.textareaDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'modelValue',
    props: 'modelValue',
    desc: t.lang.textarea.api.textareaDesc.modelValue,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.textarea.api.textareaDesc.disabled,
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
    desc: t.lang.textarea.api.textareaDesc.required,
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
    desc: t.lang.textarea.api.textareaDesc.optional,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasClear',
    props: 'hasClear',
    desc: t.lang.textarea.api.textareaDesc.hasClear,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'rows',
    props: 'rows',
    desc: t.lang.textarea.api.textareaDesc.rows,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '5'
  },
  {
    id: 'cols',
    props: 'cols',
    desc: t.lang.textarea.api.textareaDesc.cols,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rule',
    props: 'rule',
    desc: t.lang.textarea.api.textareaDesc.rule,
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
    desc: t.lang.textarea.api.textareaDesc.rootClassName,
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
    desc: t.lang.textarea.api.textareaDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'inputClassName',
    props: 'inputClassName',
    desc: t.lang.textarea.api.textareaDesc.inputClassName,
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
    desc: t.lang.textarea.api.textareaDesc.rootStyle,
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
    desc: t.lang.textarea.api.textareaDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'inputStyle',
    props: 'inputStyle',
    desc: t.lang.textarea.api.textareaDesc.inputStyle,
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
    props: '@input',
    desc: t.lang.textarea.api.textareaDesc.onInput,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.textarea.api.textareaDesc.name,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'placeholder',
    props: 'placeholder',
    desc: t.lang.textarea.api.textareaDesc.placeholder,
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
    desc: t.lang.textarea.api.textareaDesc.sizes,
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
    desc: t.lang.textarea.api.textareaDesc.color,
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
    desc: t.lang.textarea.api.textareaDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'value',
    props: 'value',
    desc: t.lang.textarea.api.textareaDesc.modelValue,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.textarea.api.textareaDesc.disabled,
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
    desc: t.lang.textarea.api.textareaDesc.required,
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
    desc: t.lang.textarea.api.textareaDesc.optional,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasClear',
    props: 'hasClear',
    desc: t.lang.textarea.api.textareaDesc.hasClear,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'label',
    props: 'label',
    desc: t.lang.textarea.api.textareaDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rows',
    props: 'rows',
    desc: t.lang.textarea.api.textareaDesc.rows,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '5'
  },
  {
    id: 'cols',
    props: 'cols',
    desc: t.lang.textarea.api.textareaDesc.cols,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.textarea.api.textareaDesc.rootClassName,
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
    desc: t.lang.textarea.api.textareaDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'inputClassName',
    props: 'inputClassName',
    desc: t.lang.textarea.api.textareaDesc.inputClassName,
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
    desc: t.lang.textarea.api.textareaDesc.rootStyle,
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
    desc: t.lang.textarea.api.textareaDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'inputStyle',
    props: 'inputStyle',
    desc: t.lang.textarea.api.textareaDesc.inputStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
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
    props: '@onChangeInput',
    desc: t.lang.textarea.api.textareaDesc.onInput,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="TextArea"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="textareaCatalogIds.TEXTAREA_API"
  />
</template>
