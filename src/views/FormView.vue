<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FormApi from '@/features/Form/components/FormApi/FormApi.vue'
import FormBasic from '@/features/Form/components/FormBasic/FormBasic.vue'
import FormColor from '@/features/Form/components/FormColor/FormColor.vue'
import FormDisabled from '@/features/Form/components/FormDisabled/FormDisabled.vue'
import FormRequired from '@/features/Form/components/FormRequired/FormRequired.vue'
import FormShape from '@/features/Form/components/FormShape/FormShape.vue'
import FormSize from '@/features/Form/components/FormSize/FormSize.vue'
</script>

<template>
  <PageLayout title="Form" importCode="import { Form } from '@/components/Control'">
    <template #showcase>
      <FormBasic />
      <FormColor />
      <FormSize />
      <FormShape />
      <FormRequired />
      <FormDisabled />
    </template>
    <template #api>
      <FormApi />
    </template>
  </PageLayout>
</template>
