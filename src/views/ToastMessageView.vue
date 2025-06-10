<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ToastMessageApi from '@/features/ToastMessage/components/ToastMessageApi/ToastMessageApi.vue'
import ToastMessageBasic from '@/features/ToastMessage/components/ToastMessageBasic/ToastMessageBasic.vue'
import ToastMessageHook from '@/features/ToastMessage/components/ToastMessageHook/ToastMessageHook.vue'
import ToastMessageType from '@/features/ToastMessage/components/ToastMessageType/ToastMessageType.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Message"
    importCode="import { ToastMessage } from '@/components/UI'"
    :desc="t.lang.toast.desc"
  >
    <template #showcase>
      <ToastMessageBasic />
      <ToastMessageType />
      <ToastMessageHook />
    </template>
    <template #api>
      <ToastMessageApi />
    </template>
  </PageLayout>
</template>
