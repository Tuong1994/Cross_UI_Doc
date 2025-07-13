<script setup lang="ts">
import { ToastMessage, Button } from '@/components/UI'
import { toastBasicCode } from './code'
import { toastCatalogIds } from '@/features/UI/ToastMessage/repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage()
</script>

<template>
  <AnchorContent :id="toastCatalogIds.BASIC">
    <ShowCase title="Basic" :code="toastBasicCode">
      <Button color="green" @click="messageApi.success('This is a success message')">Show message</Button>
      <ToastMessage />
    </ShowCase>
  </AnchorContent>
</template>
