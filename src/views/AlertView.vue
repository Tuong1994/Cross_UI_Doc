<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import AlertApi from '@/features/UI/Alert/components/AlertApi/AlertApi.vue'
import AlertBasic from '@/features/UI/Alert/components/AlertBasic/AlertBasic.vue'
import AlertHook from '@/features/UI/Alert/components/AlertHook/AlertHook.vue'
import AlertType from '@/features/UI/Alert/components/AlertType/AlertType.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = [
  "import { Alert } from '@/components/UI'",
  "import useAlert from '@/components/UI/Alert/useAlert'",
  'const alertApi = useAlert()'
]
</script>

<template>
  <PageLayout title="Alert" :importCode="importCodes" :desc="t.lang.alert.desc">
    <template #showcase>
      <AlertBasic />
      <AlertType />
      <AlertHook />
    </template>
    <template #api>
      <AlertApi />
    </template>
  </PageLayout>
</template>
