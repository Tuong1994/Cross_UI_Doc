<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ButtonApi from '@/features/Button/components/ButtonApi/ButtonApi.vue'
import ButtonBasic from '@/features/Button/components/ButtonBasic/ButtonBasic.vue'
import ButtonColor from '@/features/Button/components/ButtonColor/ButtonColor.vue'
import ButtonDisabled from '@/features/Button/components/ButtonDisabled/ButtonDisabled.vue'
import ButtonLoading from '@/features/Button/components/ButtonLoading/ButtonLoading.vue'
import ButtonShape from '@/features/Button/components/ButtonShape/ButtonShape.vue'
import ButtonSize from '@/features/Button/components/ButtonSize/ButtonSize.vue'
import ButtonText from '@/features/Button/components/ButtonText/ButtonText.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Button" importCode="import { Button } from '@/components/UI'" :desc="t.lang.button.desc">
    <template #showcase>
      <ButtonBasic />
      <ButtonColor />
      <ButtonSize />
      <ButtonShape />
      <ButtonLoading />
      <ButtonDisabled />
      <ButtonText />
    </template>
    <template #api>
      <ButtonApi />
    </template>
  </PageLayout>
</template>
