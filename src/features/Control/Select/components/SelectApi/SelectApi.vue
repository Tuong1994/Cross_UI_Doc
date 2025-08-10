<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'options',
    props: 'options',
    desc: t.lang.select.api.selectDesc.options,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['SelectOptions']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'defaultValue',
    props: 'defaultValue',
    desc: t.lang.select.api.selectDesc.defaultValue,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number', 'boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'defaultTags',
    props: 'defaultTags',
    desc: t.lang.select.api.selectDesc.defaultTags,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(string | number | boolean)[]']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'name',
    props: 'name',
    desc: t.lang.select.api.selectDesc.name,
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
    desc: t.lang.select.api.selectDesc.placeholder,
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
    desc: t.lang.select.api.selectDesc.sizes,
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
    desc: t.lang.select.api.selectDesc.color,
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
    desc: t.lang.select.api.selectDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'async',
    props: 'async',
    desc: t.lang.select.api.selectDesc.async,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.select.api.selectDesc.loading,
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
    desc: t.lang.select.api.selectDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'total',
    props: 'total',
    desc: t.lang.select.api.selectDesc.total,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '100'
  },
  {
    id: 'limit',
    props: 'limit',
    desc: t.lang.select.api.selectDesc.limit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '10'
  },
  {
    id: 'required',
    props: 'required',
    desc: t.lang.select.api.selectDesc.required,
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
    desc: t.lang.select.api.selectDesc.optional,
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
    desc: t.lang.select.api.selectDesc.hasClear,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasSearch',
    props: 'hasSearch',
    desc: t.lang.select.api.selectDesc.hasSearch,
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
    desc: t.lang.select.api.selectDesc.rule,
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
    desc: t.lang.select.api.selectDesc.rootClassName,
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
    desc: t.lang.select.api.selectDesc.labelClassName,
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
    desc: t.lang.select.api.selectDesc.inputClassName,
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
    desc: t.lang.select.api.selectDesc.rootStyle,
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
    desc: t.lang.select.api.selectDesc.labelStyle,
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
    desc: t.lang.select.api.selectDesc.inputStyle,
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
    desc: t.lang.select.api.selectDesc.onChangeSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(selectValue: string | number | boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangeSearch',
    props: '@onChangeSearch',
    desc: t.lang.select.api.selectDesc.onChangeSearch,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangePage',
    props: '@onChangePage',
    desc: t.lang.select.api.selectDesc.onChangePage,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(page: number) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'label',
    props: 'label',
    desc: t.lang.select.api.selectDesc.label,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'addonBefore',
    props: 'addonBefore',
    desc: t.lang.select.api.selectDesc.addonBefore,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'addonAfter',
    props: 'addonAfter',
    desc: t.lang.select.api.selectDesc.addonAfter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'emptyContent',
    props: 'emptyContent',
    desc: t.lang.select.api.selectDesc.emptyContent,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'options',
    props: 'options',
    desc: t.lang.select.api.selectDesc.options,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['SelectOptions']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'defaultValue',
    props: 'defaultValue',
    desc: t.lang.select.api.selectDesc.defaultValue,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number', 'boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'defaultTags',
    props: 'defaultTags',
    desc: t.lang.select.api.selectDesc.defaultTags,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(string | number | boolean)[]']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'name',
    props: 'name',
    desc: t.lang.select.api.selectDesc.name,
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
    desc: t.lang.select.api.selectDesc.placeholder,
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
    desc: t.lang.select.api.selectDesc.sizes,
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
    desc: t.lang.select.api.selectDesc.color,
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
    desc: t.lang.select.api.selectDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'async',
    props: 'async',
    desc: t.lang.select.api.selectDesc.async,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.select.api.selectDesc.loading,
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
    desc: t.lang.select.api.selectDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'total',
    props: 'total',
    desc: t.lang.select.api.selectDesc.total,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '100'
  },
  {
    id: 'limit',
    props: 'limit',
    desc: t.lang.select.api.selectDesc.limit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '10'
  },
  {
    id: 'required',
    props: 'required',
    desc: t.lang.select.api.selectDesc.required,
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
    desc: t.lang.select.api.selectDesc.optional,
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
    desc: t.lang.select.api.selectDesc.hasClear,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasSearch',
    props: 'hasSearch',
    desc: t.lang.select.api.selectDesc.hasSearch,
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
    desc: t.lang.select.api.selectDesc.rootClassName,
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
    desc: t.lang.select.api.selectDesc.labelClassName,
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
    desc: t.lang.select.api.selectDesc.inputClassName,
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
    desc: t.lang.select.api.selectDesc.rootStyle,
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
    desc: t.lang.select.api.selectDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'inputStyle',
    props: 'style',
    desc: t.lang.select.api.selectDesc.inputStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dropdownRender',
    props: '@dropdownRender',
    desc: t.lang.select.api.selectDesc.dropdownRender,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(menu: ReactNode) => ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangeSelect',
    props: '@onChangeSelect',
    desc: t.lang.select.api.selectDesc.onChangeSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(selectValue: string | number | boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangeSearch',
    props: '@onChangeSearch',
    desc: t.lang.select.api.selectDesc.onChangeSearch,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(value: string) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangePage',
    props: '@onChangePage',
    desc: t.lang.select.api.selectDesc.onChangePage,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(page: number) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Select" :dataVue="dataVue" :dataReact="dataReact" :id="selectCatalogIds.SELECT_API" />
</template>
