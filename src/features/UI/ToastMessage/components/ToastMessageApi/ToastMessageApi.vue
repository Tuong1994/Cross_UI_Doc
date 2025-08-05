<script setup lang="ts">
import { computed } from 'vue'
import { toastCatalogIds } from '@/features/UI/ToastMessage/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.toast.api.toastMessageDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemClassName',
    props: 'itemClassName',
    desc: t.lang.toast.api.toastMessageDesc.itemClassName,
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
    desc: t.lang.toast.api.toastMessageDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemStyle',
    props: 'itemStyle',
    desc: t.lang.toast.api.toastMessageDesc.itemStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'showProgress',
    props: 'showProgress',
    desc: t.lang.toast.api.toastMessageDesc.showProgress,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.toast.api.toastMessageDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemClassName',
    props: 'itemClassName',
    desc: t.lang.toast.api.toastMessageDesc.itemClassName,
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
    desc: t.lang.toast.api.toastMessageDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'itemStyle',
    props: 'itemStyle',
    desc: t.lang.toast.api.toastMessageDesc.itemStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'showProgress',
    props: 'showProgress',
    desc: t.lang.toast.api.toastMessageDesc.showProgress,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Toast Message"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="toastCatalogIds.TOAST_API"
  />
</template>
