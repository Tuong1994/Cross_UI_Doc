<script setup lang="ts">
import { Loading, Space } from '@/components/UI'
import { spinnerSizeCode } from './code'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Spinner } = Loading
</script>

<template>
  <AnchorContent :id="loadingCatalogIds.SPINNER_SIZE">
    <ShowCase title="Spinner size" :code="spinnerSizeCode">
      <Space aligns="middle">
        <Spinner />
        <Spinner :size="30" />
        <Spinner :size="45" />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
