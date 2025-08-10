<script setup lang="ts">
import { Loading, Space } from '@/components/UI'
import { spinnerSizeReactCode, spinnerSizeVueCode } from './code'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Spinner } = Loading
</script>

<template>
  <AnchorContent :id="loadingCatalogIds.SPINNER_SIZE">
    <ShowCase title="Size" :vueCode="spinnerSizeVueCode" :reactCode="spinnerSizeReactCode">
      <Space aligns="middle">
        <Spinner />
        <Spinner :size="30" />
        <Spinner :size="45" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
