<script setup lang="ts">
import { computed } from 'vue'
import { imageCatalogIds } from '@/features/Image/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
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
      codes: ['blue', 'green', 'red', 'yellow', 'orange', 'purple', 'pink']
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
  }
])
</script>

<template>
  <TableLayout title="Image" :dataSource="dataSource" :id="imageCatalogIds.IMAGE_API" />
</template>
