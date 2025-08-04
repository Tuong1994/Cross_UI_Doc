<script setup lang="ts">
import { Alert, Space, Button } from '@/components/UI'
import { alertTypeReactCode, alertTypeVueCode } from './code'
import { alertCatalogIds } from '@/features/UI/Alert/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useAlert from '@/components/UI/Alert/useAlert'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const alertApi = useAlert()
</script>

<template>
  <AnchorContent :id="alertCatalogIds.TYPE">
    <ShowCase title="Type" code="" :vueCode="alertTypeVueCode" :reactCode="alertTypeReactCode">
      <Space>
        <Button color="green" @click="() => alertApi.success('This is a success message')">Success</Button>
        <Button color="red" @click="() => alertApi.error('This is a error message')">Error</Button>
        <Button color="orange" @click="() => alertApi.warning('This is a warning message')">Warningss</Button>
        <Button color="blue" @click="() => alertApi.info('This is a info message')">Info</Button>
      </Space>
      <Alert />
    </ShowCase>
  </AnchorContent>
</template>
