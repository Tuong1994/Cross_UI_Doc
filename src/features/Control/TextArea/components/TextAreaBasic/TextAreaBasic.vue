<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@/components/Control'
import { textareaBasicCode } from './code'
import { textareaCatalogIds } from '@/features/Control/TextArea/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const inputValue = ref<string>('')
</script>

<template>
  <AnchorContent :id="textareaCatalogIds.BASIC">
    <ShowCase title="Basic" :code="textareaBasicCode">
      <TextArea v-model="inputValue" rootClassName="section-space" color="green" />
      <TextArea color="green" disabled />
    </ShowCase>
  </AnchorContent>
</template>
