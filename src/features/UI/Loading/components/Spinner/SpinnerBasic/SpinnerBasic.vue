<script setup lang="ts">
import { Loading, Space } from '@/components/UI'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import { spinnerBasicVueCode, spinnerBasicReactCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Spinner } = Loading
</script>

<template>
  <AnchorContent :id="loadingCatalogIds.SPINNER_BASIC">
    <ShowCase title="Basic" :vueCode="spinnerBasicVueCode" :reactCode="spinnerBasicReactCode">
      <Space aligns="middle">
        <Spinner />
        <Spinner color="blue" />
        <Spinner color="green" :size="30" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>


