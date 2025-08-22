<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import SwitchApi from '@/features/UI/Switch/components/SwitchApi/SwitchApi.vue';
import SwitchBasic from '@/features/UI/Switch/components/SwitchBasic/SwitchBasic.vue';
import SwitchColor from '@/features/UI/Switch/components/SwitchColor/SwitchColor.vue';
import SwitchSize from '@/features/UI/Switch/components/SwitchSize/SwitchSize.vue';
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Switch" importCode="import { Switch } from '@/components/UI'" :desc="t.lang.switch.desc">
    <template #showcase>
      <SwitchBasic />
      <SwitchColor />
      <SwitchSize />
    </template>
    <template #api>
      <SwitchApi />
    </template>
  </PageLayout>
</template>
