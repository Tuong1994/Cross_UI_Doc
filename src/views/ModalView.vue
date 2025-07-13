<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ModalApi from '@/features/UI/Modal/components/ModalApi/ModalApi.vue'
import ModalBasic from '@/features/UI/Modal/components/ModalBasic/ModalBasic.vue'
import ModalColor from '@/features/UI/Modal/components/ModalColor/ModalColor.vue'
import ModalSize from '@/features/UI/Modal/components/ModalSize/ModalSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Modal" importCode="import { Modal } from '@/components/UI'" :desc="t.lang.modal.desc">
    <template #showcase>
      <ModalBasic />
      <ModalColor />
      <ModalSize />
    </template>
    <template #api>
      <ModalApi />
    </template>
  </PageLayout>
</template>
