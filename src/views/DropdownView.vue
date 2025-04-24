<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DropdownApi from '@/features/Dropdown/components/DropdownApi/DropdownApi.vue'
import DropdownItemApi from '@/features/Dropdown/components/DropdownApi/DropdownItemApi.vue'
import DropdownBasic from '@/features/Dropdown/components/DropdownBasic/DropdownBasic.vue'
import DropdownPlacement from '@/features/Dropdown/components/DropdownPlacement/DropdownPlacement.vue'
import DropdownTrigger from '@/features/Dropdown/components/DropdownTrigger/DropdownTrigger.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Dropdown"
    importCode="import { Dropdown } from '@/components/UI'"
    :desc="t.lang.dropdown.desc"
  >
    <template #showcase>
      <DropdownBasic />
      <DropdownPlacement />
      <DropdownTrigger />
    </template>
    <template #api>
      <DropdownApi />
      <DropdownItemApi />
    </template>
  </PageLayout>
</template>
