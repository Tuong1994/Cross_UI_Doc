<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FormApi from '@/features/Control/Form/components/FormApi/FormApi.vue'
import FormBasic from '@/features/Control/Form/components/FormBasic/FormBasic.vue'
import FormColor from '@/features/Control/Form/components/FormColor/FormColor.vue'
import FormDisabled from '@/features/Control/Form/components/FormDisabled/FormDisabled.vue'
import FormValidation from '@/features/Control/Form/components/FormValidation/FormValidation.vue'
import FormShape from '@/features/Control/Form/components/FormShape/FormShape.vue'
import FormSize from '@/features/Control/Form/components/FormSize/FormSize.vue'
import FormRule from '@/features/Control/Form/components/FormRule/FormRule.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Form" importCode="import { Form } from '@/components/Control'" :desc="t.lang.form.desc">
    <template #showcase>
      <FormBasic />
      <FormColor />
      <FormSize />
      <FormShape />
      <FormDisabled />
      <FormValidation />
      <FormRule />
    </template>
    <template #api>
      <FormApi />
    </template>
  </PageLayout>
</template>
