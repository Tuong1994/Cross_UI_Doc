<script setup lang="ts">
import { computed } from 'vue'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'name',
    props: 'name',
    desc: t.lang.form.api.formItemDesc.name,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'type',
    props: 'type',
    desc: t.lang.form.api.formItemDesc.type,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['default', 'checkgroup']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'rules',
    props: 'rules',
    desc: t.lang.form.api.formItemDesc.rules,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['FormRule[]']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'disabled',
    props: 'disabled',
    desc: t.lang.form.api.formItemDesc.disabled,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
])
</script>

<template>
  <TableLayout title="FormItem (React)" :multiple="false" :dataSource="dataSource" :id="formCatalogIds.FORM_API" />
</template>
