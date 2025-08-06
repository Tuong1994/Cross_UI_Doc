<script setup lang="ts">
import { ref } from 'vue'
import { InputPhone } from '@/components/Control'
import { inputPhoneReactCode, inputPhoneVueCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const phone = ref<string>('')
</script>

<template>
  <AnchorContent :id="inputCatalogIds.PHONE">
    <ShowCase title="Phone" code="" :vueCode="inputPhoneVueCode" :reactCode="inputPhoneReactCode">
      <InputPhone v-model="phone" :rootStyle="{ width: '250px' }" color="green" />
    </ShowCase>
  </AnchorContent>
</template>
