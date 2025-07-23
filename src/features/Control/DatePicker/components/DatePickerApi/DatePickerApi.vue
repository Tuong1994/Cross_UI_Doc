<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.datepicker.api.datepickerDesc.name,
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
    desc: t.lang.datepicker.api.datepickerDesc.sizes,
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
    desc: t.lang.datepicker.api.datepickerDesc.color,
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
    desc: t.lang.datepicker.api.datepickerDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'defaultDate',
    props: 'defaultDate',
    desc: t.lang.datepicker.api.datepickerDesc.defaultDate,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['Date']
    },
    required: t.lang.common.required.no,
    default: 'new Date()'
  },
  {
    id: 'format',
    props: 'format',
    desc: t.lang.datepicker.api.datepickerDesc.format,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'DD/MM/YYYY'
  },
  {
    id: 'min',
    props: 'min',
    desc: t.lang.datepicker.api.datepickerDesc.min,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['today', 'string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'max',
    props: 'max',
    desc: t.lang.datepicker.api.datepickerDesc.max,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['today', 'string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.datepicker.api.datepickerDesc.disabled,
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
    desc: t.lang.datepicker.api.datepickerDesc.required,
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
    desc: t.lang.datepicker.api.datepickerDesc.optional,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasReset',
    props: 'hasReset',
    desc: t.lang.datepicker.api.datepickerDesc.hasReset,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'rule',
    props: 'rule',
    desc: t.lang.datepicker.api.datepickerDesc.rule,
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
    desc: t.lang.datepicker.api.datepickerDesc.rootClassName,
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
    desc: t.lang.datepicker.api.datepickerDesc.labelClassName,
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
    desc: t.lang.datepicker.api.datepickerDesc.inputClassName,
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
    desc: t.lang.datepicker.api.datepickerDesc.rootStyle,
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
    desc: t.lang.datepicker.api.datepickerDesc.labelStyle,
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
    desc: t.lang.datepicker.api.datepickerDesc.inputStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangeSelect',
    props: '@onChangeSelect',
    desc: t.lang.datepicker.api.datepickerDesc.onChangeSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(date: Date) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="DatePicker" :dataSource="dataSource" :id="datepickerCatalogIds.DATEPICKER_API" />
</template>
