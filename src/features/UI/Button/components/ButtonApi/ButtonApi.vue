<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { buttonCatalogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
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
      codes: helper.getColorType()
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
      codes: helper.getSizeType()
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
      codes: helper.getShapeType()
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
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.button.api.buttonDesc.rootClassName,
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
    desc: t.lang.button.api.buttonDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyeValue']
    },
    required: t.lang.common.required.no,
    default: '-'
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
  }
])

const dataReact = computed<ComponentApi[]>(() => [
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
      codes: helper.getColorType()
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
      codes: helper.getSizeType()
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
      codes: helper.getShapeType()
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
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.button.api.buttonDesc.rootClassName,
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
    desc: t.lang.button.api.buttonDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'click',
    props: '@onClick',
    desc: t.lang.button.api.buttonDesc.click,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(event: React.MouseEvent): void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Button" :dataVue="dataVue" :dataReact="dataReact" :id="buttonCatalogIds.BUTTON_API" />
</template>
