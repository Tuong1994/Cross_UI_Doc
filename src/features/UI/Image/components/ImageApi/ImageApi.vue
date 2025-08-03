<script setup lang="ts">
import { computed } from 'vue'
import { imageCatalogIds } from '@/features/UI/Image/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'src',
    props: 'src',
    desc: t.lang.image.api.imageDesc.src,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.image.api.imageDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['sm', 'md', 'lg']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'imgWidth',
    props: 'imgWidth',
    desc: t.lang.image.api.imageDesc.imgWidth,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'imgHeight',
    props: 'imgHeight',
    desc: t.lang.image.api.imageDesc.imgHeight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'objectFit',
    props: 'objectFit',
    desc: t.lang.image.api.imageDesc.objectFit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['fill', 'contain', 'cover', 'none']
    },
    required: t.lang.common.required.no,
    default: 'fill'
  },
  {
    id: 'lazyType',
    props: 'lazyType',
    desc: t.lang.image.api.imageDesc.lazyType,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['immediate', 'lazy']
    },
    required: t.lang.common.required.no,
    default: 'lazy'
  },
  {
    id: 'hasView',
    props: 'hasView',
    desc: t.lang.image.api.imageDesc.hasView,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasRemove',
    props: 'hasRemove',
    desc: t.lang.image.api.imageDesc.hasRemove,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasCheck',
    props: 'hasCheck',
    desc: t.lang.image.api.imageDesc.hasCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'checkboxColor',
    props: 'checkboxColor',
    desc: t.lang.image.api.imageDesc.checkboxColor,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.image.api.imageDesc.rootClassName,
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
    desc: t.lang.image.api.imageDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCheck',
    props: '@onCheck',
    desc: t.lang.image.api.imageDesc.onCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(checked: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onRemove',
    props: '@onRemove',
    desc: t.lang.image.api.imageDesc.onRemove,
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
    id: 'src',
    props: 'src',
    desc: t.lang.image.api.imageDesc.src,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.image.api.imageDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['sm', 'md', 'lg']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'imgWidth',
    props: 'imgWidth',
    desc: t.lang.image.api.imageDesc.imgWidth,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'imgHeight',
    props: 'imgHeight',
    desc: t.lang.image.api.imageDesc.imgHeight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string', 'number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'objectFit',
    props: 'objectFit',
    desc: t.lang.image.api.imageDesc.objectFit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['fill', 'contain', 'cover', 'none']
    },
    required: t.lang.common.required.no,
    default: 'fill'
  },
  {
    id: 'lazyType',
    props: 'lazyType',
    desc: t.lang.image.api.imageDesc.lazyType,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['immediate', 'lazy']
    },
    required: t.lang.common.required.no,
    default: 'lazy'
  },
  {
    id: 'hasView',
    props: 'hasView',
    desc: t.lang.image.api.imageDesc.hasView,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasRemove',
    props: 'hasRemove',
    desc: t.lang.image.api.imageDesc.hasRemove,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'hasCheck',
    props: 'hasCheck',
    desc: t.lang.image.api.imageDesc.hasCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'checkboxColor',
    props: 'checkboxColor',
    desc: t.lang.image.api.imageDesc.checkboxColor,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.image.api.imageDesc.rootClassName,
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
    desc: t.lang.image.api.imageDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCheck',
    props: '@onCheck',
    desc: t.lang.image.api.imageDesc.onCheck,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(checked: boolean) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onRemove',
    props: '@onRemove',
    desc: t.lang.image.api.imageDesc.onRemove,
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
  <TableLayout
    title="Image"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="imageCatalogIds.IMAGE_API"
  />
</template>
