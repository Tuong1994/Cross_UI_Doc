<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { buttonCatalogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'type',
    props: 'type',
    desc: t.lang.button.api.buttonDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['button', 'submit', 'reset']
    },
    required: t.lang.common.required.no,
    default: 'button'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.button.api.buttonDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['blue', 'green', 'red', 'orange', 'yellow', 'pink', 'purple']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.button.api.buttonDesc.sizes,
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
    desc: t.lang.button.api.buttonDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['round', 'square']
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'ghost',
    props: 'ghost',
    desc: t.lang.button.api.buttonDesc.ghost,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.button.api.buttonDesc.loading,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.button.api.buttonDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'text',
    props: 'text',
    desc: t.lang.button.api.buttonDesc.text,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'click',
    props: '@click',
    desc: t.lang.button.api.buttonDesc.click,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(...args: any[]) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout title="Button" :dataSource="dataSource" :id="buttonCatalogIds.BUTTON_API" />
</template>
