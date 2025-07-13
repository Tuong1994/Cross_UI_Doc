<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ButtonApi from '@/features/UI/Button/components/ButtonApi/ButtonApi.vue'
import ButtonBasic from '@/features/UI/Button/components/ButtonBasic/ButtonBasic.vue'
import ButtonColor from '@/features/UI/Button/components/ButtonColor/ButtonColor.vue'
import ButtonDisabled from '@/features/UI/Button/components/ButtonDisabled/ButtonDisabled.vue'
import ButtonLoading from '@/features/UI/Button/components/ButtonLoading/ButtonLoading.vue'
import ButtonShape from '@/features/UI/Button/components/ButtonShape/ButtonShape.vue'
import ButtonSize from '@/features/UI/Button/components/ButtonSize/ButtonSize.vue'
import ButtonText from '@/features/UI/Button/components/ButtonText/ButtonText.vue'
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
