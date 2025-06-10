<script setup lang="ts">
import { ToastMessage, Button, Space } from '@/components/UI'
import { toastTypeCode } from './code'
import { toastCatalogIds } from '@/features/ToastMessage/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage()
</script>

<template>
  <AnchorContent :id="toastCatalogIds.BASIC">
    <ShowCase title="Type" :code="toastTypeCode">
      <Space>
        <Button color="green" @click="messageApi.success('This is a success message')">Success</Button>
        <Button color="red" @click="messageApi.error('This is a error message')">Error</Button>
        <Button color="orange" @click="messageApi.warning('This is a warning message')">Warning</Button>
        <Button color="blue" @click="messageApi.info('This is a info message')">Info</Button>
      </Space>
      <ToastMessage />
    </ShowCase>
  </AnchorContent>
</template>
