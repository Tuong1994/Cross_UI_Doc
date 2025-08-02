<script setup lang="ts">
import { computed } from 'vue'
import { avatarCatalogIds } from '@/features/UI/Avatar/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.avatar.api.avatarDesc.color,
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
    desc: t.lang.avatar.api.avatarDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['circle', 'square']
    },
    required: t.lang.common.required.no,
    default: 'circle'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.avatar.api.avatarDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '30'
  },
  {
    id: 'badge',
    props: 'badge',
    desc: t.lang.avatar.api.avatarDesc.badge,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'letter',
    props: 'letter',
    desc: t.lang.avatar.api.avatarDesc.letter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dot',
    props: 'dot',
    desc: t.lang.avatar.api.avatarDesc.dot,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.avatar.api.avatarDesc.rootClassName,
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
    desc: t.lang.avatar.api.avatarDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.avatar.api.avatarDesc.color,
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
    desc: t.lang.avatar.api.avatarDesc.shape,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['circle', 'square']
    },
    required: t.lang.common.required.no,
    default: 'circle'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.avatar.api.avatarDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '30'
  },
  {
    id: 'badge',
    props: 'badge',
    desc: t.lang.avatar.api.avatarDesc.badge,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'letter',
    props: 'letter',
    desc: t.lang.avatar.api.avatarDesc.letter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'dot',
    props: 'dot',
    desc: t.lang.avatar.api.avatarDesc.dot,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.avatar.api.avatarDesc.rootClassName,
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
    desc: t.lang.avatar.api.avatarDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Avatar"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="avatarCatalogIds.AVATAR_API"
  />
</template>
