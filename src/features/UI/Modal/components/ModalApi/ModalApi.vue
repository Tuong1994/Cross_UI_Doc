<script setup lang="ts">
import { computed } from 'vue'
import { ECodeElType } from '@/components/View/Code/enum'
import { modalCatalogIds } from '@/features/UI/Modal/repository/catalogIds'
import { routePaths } from '@/router'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'open',
    props: 'open',
    desc: t.lang.modal.api.modalDesc.open,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasHead',
    props: 'hasHead',
    desc: t.lang.modal.api.modalDesc.hasHead,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasFoot',
    props: 'hasFoot',
    desc: t.lang.modal.api.modalDesc.hasFoot,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasCloseIcon',
    props: 'hasCloseIcon',
    desc: t.lang.modal.api.modalDesc.hasCloseIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasCancelButton',
    props: 'hasCancelButton',
    desc: t.lang.modal.api.modalDesc.hasCancelButton,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'backdropClose',
    props: 'backdropClose',
    desc: t.lang.modal.api.modalDesc.backdropClose,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'okButtonTitle',
    props: 'okButtonTitle',
    desc: t.lang.modal.api.modalDesc.okButtonTitle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'OK'
  },
  {
    id: 'cancelButtonTitle',
    props: 'cancelButtonTitle',
    desc: t.lang.modal.api.modalDesc.cancelButtonTitle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: 'Cancel'
  },
  {
    id: 'okButtonProps',
    props: 'okButtonProps',
    desc: t.lang.modal.api.modalDesc.okButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'cancelButtonProps',
    props: 'cancelButtonProps',
    desc: t.lang.modal.api.modalDesc.cancelButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.modal.api.modalDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.modal.api.modalDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.modal.api.modalDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headClassName',
    props: 'headClassName',
    desc: t.lang.modal.api.modalDesc.headClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyClassName',
    props: 'bodyClassName',
    desc: t.lang.modal.api.modalDesc.bodyClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'footClassName',
    props: 'footClassName',
    desc: t.lang.modal.api.modalDesc.footClassName,
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
    desc: t.lang.modal.api.modalDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headStyle',
    props: 'headStyle',
    desc: t.lang.modal.api.modalDesc.headStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyStyle',
    props: 'bodyStyle',
    desc: t.lang.modal.api.modalDesc.bodyStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'footStyle',
    props: 'footStyle',
    desc: t.lang.modal.api.modalDesc.footStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onOk',
    props: 'onOk',
    desc: t.lang.modal.api.modalDesc.onOk,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCancel',
    props: 'onCancel',
    desc: t.lang.modal.api.modalDesc.onCancel,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'open',
    props: 'open',
    desc: t.lang.modal.api.modalDesc.open,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'head',
    props: 'head',
    desc: t.lang.modal.api.modalDesc.head,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasHead',
    props: 'hasHead',
    desc: t.lang.modal.api.modalDesc.hasHead,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasFoot',
    props: 'hasFoot',
    desc: t.lang.modal.api.modalDesc.hasFoot,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasCloseIcon',
    props: 'hasCloseIcon',
    desc: t.lang.modal.api.modalDesc.hasCloseIcon,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'hasCancelButton',
    props: 'hasCancelButton',
    desc: t.lang.modal.api.modalDesc.hasCancelButton,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'backdropClose',
    props: 'backdropClose',
    desc: t.lang.modal.api.modalDesc.backdropClose,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'true'
  },
  {
    id: 'okButtonTitle',
    props: 'okButtonTitle',
    desc: t.lang.modal.api.modalDesc.okButtonTitle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: 'OK'
  },
  {
    id: 'cancelButtonTitle',
    props: 'cancelButtonTitle',
    desc: t.lang.modal.api.modalDesc.cancelButtonTitle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.no,
    default: 'Cancel'
  },
  {
    id: 'okButtonProps',
    props: 'okButtonProps',
    desc: t.lang.modal.api.modalDesc.okButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'cancelButtonProps',
    props: 'cancelButtonProps',
    desc: t.lang.modal.api.modalDesc.cancelButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.modal.api.modalDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'sizes',
    props: 'sizes',
    desc: t.lang.modal.api.modalDesc.sizes,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getSizeType()
    },
    required: t.lang.common.required.no,
    default: 'md'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.modal.api.modalDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headClassName',
    props: 'headClassName',
    desc: t.lang.modal.api.modalDesc.headClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyClassName',
    props: 'bodyClassName',
    desc: t.lang.modal.api.modalDesc.bodyClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'footClassName',
    props: 'footClassName',
    desc: t.lang.modal.api.modalDesc.footClassName,
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
    desc: t.lang.modal.api.modalDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'headStyle',
    props: 'headStyle',
    desc: t.lang.modal.api.modalDesc.headStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'bodyStyle',
    props: 'bodyStyle',
    desc: t.lang.modal.api.modalDesc.bodyStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'footStyle',
    props: 'footStyle',
    desc: t.lang.modal.api.modalDesc.footStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onOk',
    props: 'onOk',
    desc: t.lang.modal.api.modalDesc.onOk,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCancel',
    props: 'onCancel',
    desc: t.lang.modal.api.modalDesc.onCancel,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Modal" :dataVue="dataVue" :dataReact="dataReact" :id="modalCatalogIds.MODAL_API" />
</template>
