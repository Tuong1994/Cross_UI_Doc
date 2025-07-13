<script setup lang="ts">
import { computed } from 'vue'
import { dropdownCatalogIds } from '@/features/UI/Dropdown/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.dropdown.api.itemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'comName',
    props: 'comName',
    desc: t.lang.dropdown.api.itemDesc.comName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
])
</script>

<template>
  <TableLayout
    title="Dropdown Item"
    :dataSource="dataSource"
    :id="dropdownCatalogIds.DROPDOWN_ITEM_API"
  />
</template>
