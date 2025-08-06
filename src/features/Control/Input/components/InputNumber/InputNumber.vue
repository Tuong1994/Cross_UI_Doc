<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@/components/Control'
import { inputNumberReactCode, inputNumberVueCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const nums = ref<number>(0)
</script>

<template>
  <AnchorContent :id="inputCatalogIds.NUMBER">
    <ShowCase title="Number" code="" :vueCode="inputNumberVueCode" :reactCode="inputNumberReactCode">
      <InputNumber v-model="nums" :rootStyle="{ width: '250px' }" color="green" />
    </ShowCase>
  </AnchorContent>
</template>
