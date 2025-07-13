<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FormApi from '@/features/Control/Form/components/FormApi/FormApi.vue'
import FormBasic from '@/features/Control/Form/components/FormBasic/FormBasic.vue'
import FormColor from '@/features/Control/Form/components/FormColor/FormColor.vue'
import FormDisabled from '@/features/Control/Form/components/FormDisabled/FormDisabled.vue'
import FormRequired from '@/features/Control/Form/components/FormRequired/FormRequired.vue'
import FormShape from '@/features/Control/Form/components/FormShape/FormShape.vue'
import FormSize from '@/features/Control/Form/components/FormSize/FormSize.vue'
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
