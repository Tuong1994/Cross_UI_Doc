<script setup lang="ts">
import { computed } from 'vue'
import { formCatalogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

// initialValues: M
//   disabled?: boolean
//   autoFocusValidation?: boolean
//   color?: ControlColor
//   sizes?: ComponentSize
//   shape?: ControlShape

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'initialValues',
    props: 'initialValues',
    desc: t.lang.form.api.formDesc.initialValues,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['object']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'autoFocusValidation',
    props: 'autoFocusValidation',
    desc: t.lang.form.api.formDesc.autoFocusValidation,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.form.api.formDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.form.api.formDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['blue', 'green', 'red', 'orange', 'yellow', 'pink', 'purple']
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.form.api.formDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['sm', 'md', 'lg']
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.form.api.formDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['square', 'round']
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'onFinish',
    props: '@onFinish',
    desc: t.lang.form.api.formDesc.onFinish,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(data: any) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout title="Form" :dataSource="dataSource" :id="formCatalogIds.FORM_API" />
</template>
