<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from '@/components/Control'
import { inputPasswordCode } from './code'
import { inputCatalogIds } from '@/features/Control/Input/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const password = ref<string>('')
</script>

<template>
  <AnchorContent :id="inputCatalogIds.PASSWORD">
    <ShowCase title="Password" :code="inputPasswordCode">
      <InputPassword v-model="password" :rootStyle="{ width: '250px' }" color="green" />
    </ShowCase>
  </AnchorContent>
</template>
