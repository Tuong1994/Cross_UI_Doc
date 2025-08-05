<script setup lang="ts">
import { Typography } from '@/components/UI'
import {
  toastHookVueCode,
  toastHookReactCode,
  toastHookUsageReactCode,
  toastHookUsageVueCode,
  toastStoreVueCode,
  toastStoreReactCode,
  toastTypeVueCode,
  toastTypeReactCode
} from './code'
import { toastCatalogIds } from '@/features/UI/ToastMessage/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="toastCatalogIds.HOOK">
    <Paragraph rootClassName="section-space" :size="18" :weight="600">useMessage</Paragraph>
    <ShowCase :onlyCode="true" code="" :vueCode="toastHookUsageVueCode" :reactCode="toastHookUsageReactCode">
      <template #head>
        <Paragraph :size="16">{{ t.lang.common.usage }}</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" code="" :vueCode="toastHookVueCode" :reactCode="toastHookReactCode">
      <template #head>
        <Paragraph :size="16">useMessage</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/useMessage</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" code="" :vueCode="toastStoreVueCode" :reactCode="toastStoreReactCode">
      <template #head>
        <Paragraph :size="16">ToastStore</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/ToastStore</Paragraph>
      </template>
    </ShowCase>
    <ShowCase :onlyCode="true" code="" :vueCode="toastTypeVueCode" :reactCode="toastTypeReactCode">
      <template #head>
        <Paragraph :size="16">Type</Paragraph>
        <Paragraph italic variant="secondary">@/components/UI/ToastMessage/type</Paragraph>
      </template>
    </ShowCase>
  </AnchorContent>
</template>
