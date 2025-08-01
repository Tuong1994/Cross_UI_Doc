<script setup lang="ts">
import { computed } from 'vue'
import { dropdownCatalogIds } from '@/features/UI/Dropdown/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.dropdown.api.dropdownDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: dropdownCatalogIds.DROPDOWN_ITEM_API,
      codes: ['DropdownItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'trigger',
    props: 'trigger',
    desc: t.lang.dropdown.api.dropdownDesc.trigger,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['click', 'hover']
    },
    required: t.lang.common.required.no,
    default: 'click'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.dropdown.api.dropdownDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.dropdown.api.dropdownDesc.rootClassName,
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
    desc: t.lang.dropdown.api.dropdownDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dropdownClassName',
    props: 'dropdownClassName',
    desc: t.lang.dropdown.api.dropdownDesc.dropdownClassName,
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
    desc: t.lang.dropdown.api.dropdownDesc.rootStyle,
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
    desc: t.lang.dropdown.api.dropdownDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dropdownStyle',
    props: 'dropdownStyle',
    desc: t.lang.dropdown.api.dropdownDesc.dropdownStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSelect',
    props: '@onSelect',
    desc: t.lang.dropdown.api.dropdownDesc.onSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( item: DropdownItem ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.dropdown.api.dropdownDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: dropdownCatalogIds.DROPDOWN_ITEM_API,
      codes: ['DropdownItems']
    },
    required: t.lang.common.required.no,
    default: '[]'
  },
  {
    id: 'trigger',
    props: 'trigger',
    desc: t.lang.dropdown.api.dropdownDesc.trigger,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['click', 'hover']
    },
    required: t.lang.common.required.no,
    default: 'click'
  },
  {
    id: 'placement',
    props: 'placement',
    desc: t.lang.dropdown.api.dropdownDesc.placement,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'right']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'defaultSelectedId',
    props: 'defaultSelectedId',
    desc: t.lang.dropdown.api.dropdownDesc.defaultSelectedId,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.dropdown.api.dropdownDesc.rootClassName,
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
    desc: t.lang.dropdown.api.dropdownDesc.labelClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dropdownClassName',
    props: 'dropdownClassName',
    desc: t.lang.dropdown.api.dropdownDesc.dropdownClassName,
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
    desc: t.lang.dropdown.api.dropdownDesc.rootStyle,
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
    desc: t.lang.dropdown.api.dropdownDesc.labelStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dropdownStyle',
    props: 'dropdownStyle',
    desc: t.lang.dropdown.api.dropdownDesc.dropdownStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onSelect',
    props: '@onSelect',
    desc: t.lang.dropdown.api.dropdownDesc.onSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['( item: DropdownItem ) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout
    title="Dropdown"
    rootClassName="section-space"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="dropdownCatalogIds.DROPDOWN_API"
  />
</template>
