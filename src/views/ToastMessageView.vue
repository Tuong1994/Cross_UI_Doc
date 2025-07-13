<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ToastMessageApi from '@/features/UI/ToastMessage/components/ToastMessageApi/ToastMessageApi.vue'
import ToastMessageBasic from '@/features/UI/ToastMessage/components/ToastMessageBasic/ToastMessageBasic.vue'
import ToastMessageHook from '@/features/UI/ToastMessage/components/ToastMessageHook/ToastMessageHook.vue'
import ToastMessageType from '@/features/UI/ToastMessage/components/ToastMessageType/ToastMessageType.vue'
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
