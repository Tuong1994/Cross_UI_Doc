<script setup lang="ts">
import { Alert, Button } from '@/components/UI'
import { alertCatalogIds } from '@/features/UI/Alert/repository/catalogIds'
import { alertBasicCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useAlert from '@/components/UI/Alert/useAlert'

const alertApi = useAlert()
</script>

<template>
  <AnchorContent :id="alertCatalogIds.BASIC">
    <ShowCase title="Basic" :code="alertBasicCode">
      <Button color="blue" @click="() => alertApi.info('This is a message')">Show alert</Button>
      <Alert />
    </ShowCase>
  </AnchorContent>
</template>
