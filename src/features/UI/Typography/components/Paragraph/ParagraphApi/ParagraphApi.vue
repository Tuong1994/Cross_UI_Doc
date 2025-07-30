<script setup lang="ts">
import { computed } from 'vue'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'aligns',
    props: 'aligns',
    desc: t.lang.typography.api.paragraphDesc.aligns,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right', 'justify']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.typography.api.paragraphDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '14'
  },
  {
    id: 'lineHeight',
    props: 'lineHeight',
    desc: t.lang.typography.api.paragraphDesc.lineHeight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '25'
  },
  {
    id: 'mark',
    props: 'mark',
    desc: t.lang.typography.api.paragraphDesc.mark,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'strong',
    props: 'strong',
    desc: t.lang.typography.api.paragraphDesc.strong,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'variant',
    props: 'variant',
    desc: t.lang.typography.api.paragraphDesc.variant,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'secondary', 'success', 'warning', 'danger']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'weight',
    props: 'weight',
    desc: t.lang.typography.api.paragraphDesc.weight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '400'
  },
  {
    id: 'italic',
    props: 'italic',
    desc: t.lang.typography.api.paragraphDesc.italic,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'underline',
    props: 'underline',
    desc: t.lang.typography.api.paragraphDesc.underline,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'remove',
    props: 'remove',
    desc: t.lang.typography.api.paragraphDesc.remove,
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
    desc: t.lang.typography.api.paragraphDesc.rootClassName,
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
    desc: t.lang.typography.api.paragraphDesc.rootStyle,
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
    id: 'aligns',
    props: 'aligns',
    desc: t.lang.typography.api.paragraphDesc.aligns,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['left', 'center', 'right', 'justify']
    },
    required: t.lang.common.required.no,
    default: 'left'
  },
  {
    id: 'size',
    props: 'size',
    desc: t.lang.typography.api.paragraphDesc.size,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '14'
  },
  {
    id: 'lineHeight',
    props: 'lineHeight',
    desc: t.lang.typography.api.paragraphDesc.lineHeight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '25'
  },
  {
    id: 'mark',
    props: 'mark',
    desc: t.lang.typography.api.paragraphDesc.mark,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'strong',
    props: 'strong',
    desc: t.lang.typography.api.paragraphDesc.strong,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'variant',
    props: 'variant',
    desc: t.lang.typography.api.paragraphDesc.variant,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'secondary', 'success', 'warning', 'danger']
    },
    required: t.lang.common.required.no,
    default: 'default'
  },
  {
    id: 'weight',
    props: 'weight',
    desc: t.lang.typography.api.paragraphDesc.weight,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '400'
  },
  {
    id: 'italic',
    props: 'italic',
    desc: t.lang.typography.api.paragraphDesc.italic,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'underline',
    props: 'underline',
    desc: t.lang.typography.api.paragraphDesc.underline,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'remove',
    props: 'remove',
    desc: t.lang.typography.api.paragraphDesc.remove,
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
    desc: t.lang.typography.api.paragraphDesc.rootClassName,
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
    desc: t.lang.typography.api.paragraphDesc.rootStyle,
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
    title="Paragraph"
    :dataSource="[]"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="typographyCatalogIds.PARAGRAPH_API"
  />
</template>
