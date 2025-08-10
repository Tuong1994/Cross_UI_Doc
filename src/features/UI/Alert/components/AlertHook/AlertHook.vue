<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import { alertCatalogIds } from '@/features/UI/Alert/repository/catalogIds'
import {
  alertStoreVueCode,
  alertStoreReactCode,
  alertTypeVueCode,
  alertTypeReactCode,
  useAlertHookVueCode,
  useAlertHookReactCode,
  useAlertHookUsageReactCode,
  useAlertHookUsageVueCode
} from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="alertCatalogIds.HOOK">
    <Paragraph :size="18" :weight="600" rootClassName="section-space">useAlert</Paragraph>
    <ShowCase
      code=""
      :onlyCode="true"
      :vueCode="useAlertHookUsageVueCode"
      :reactCode="useAlertHookUsageReactCode"
    >
      <template #head>
        <Paragraph :size="16">{{ t.lang.common.usage }}</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" :vueCode="useAlertHookVueCode" :reactCode="useAlertHookReactCode">
      <template #head>
        <Paragraph :size="16">Hook</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/useAlert</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" :vueCode="alertStoreVueCode" :reactCode="alertStoreReactCode">
      <template #head>
        <Paragraph :size="16">AlertStore</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/AlertStore</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" :vueCode="alertTypeVueCode" :reactCode="alertTypeReactCode">
      <template #head>
        <Paragraph :size="16">Type</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/Alert/type</Paragraph>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
