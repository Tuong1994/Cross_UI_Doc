<script setup lang="ts">
import { computed } from 'vue'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'defaultImageUrl',
    props: 'defaultImageUrl',
    desc: t.lang.upload.api.singleDesc.defaultImageUrl,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.upload.api.singleDesc.loading,
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
    desc: t.lang.upload.api.uploadDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'fileAccepted',
    props: 'fileAccepted',
    desc: t.lang.upload.api.uploadDesc.fileAccepted,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: "'image/png', 'image/jpg', 'image/jpeg'"
  },
  {
    id: 'limit',
    props: 'limit',
    desc: t.lang.upload.api.uploadDesc.limit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '1024 * 1024 * 2'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.upload.api.uploadDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.upload.api.uploadDesc.color,
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
    desc: t.lang.upload.api.uploadDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlClassName',
    props: 'controlClassName',
    desc: t.lang.upload.api.uploadDesc.controlClassName,
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
    desc: t.lang.upload.api.uploadDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlStyle',
    props: 'controlStyle',
    desc: t.lang.upload.api.uploadDesc.controlStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onUpload',
    props: '@onUpload',
    desc: t.lang.upload.api.uploadDesc.onUpload,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(file: File | null) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'defaultImageUrl',
    props: 'defaultImageUrl',
    desc: t.lang.upload.api.singleDesc.defaultImageUrl,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.upload.api.singleDesc.loading,
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
    desc: t.lang.upload.api.uploadDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'fileAccepted',
    props: 'fileAccepted',
    desc: t.lang.upload.api.uploadDesc.fileAccepted,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: "'image/png', 'image/jpg', 'image/jpeg'"
  },
  {
    id: 'limit',
    props: 'limit',
    desc: t.lang.upload.api.uploadDesc.limit,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '1024 * 1024 * 2'
  },
  {
    id: 'shape',
    props: 'shape',
    desc: t.lang.upload.api.uploadDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getShapeType()
    },
    required: t.lang.common.required.no,
    default: 'square'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.upload.api.uploadDesc.color,
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
    desc: t.lang.upload.api.uploadDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlClassName',
    props: 'controlClassName',
    desc: t.lang.upload.api.uploadDesc.controlClassName,
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
    desc: t.lang.upload.api.uploadDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'controlStyle',
    props: 'controlStyle',
    desc: t.lang.upload.api.uploadDesc.controlStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onUpload',
    props: '@onUpload',
    desc: t.lang.upload.api.uploadDesc.onUpload,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(file: File | null) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Single image upload"
    rootClassName="section-space"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="uploadCatalogIds.SINGLE_IMAGE_UPLOAD_API"
  />
</template>
