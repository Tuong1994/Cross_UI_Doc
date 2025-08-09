<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { checkboxBasicReactCode, checkboxBasicVueCode } from './code'
import { checkboxCatalogIds } from '@/features/Control/CheckBox/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <AnchorContent :id="checkboxCatalogIds.BASIC">
    <ShowCase title="Basic" code="" :vueCode="checkboxBasicVueCode" :reactCode="checkboxBasicReactCode">
      <Space>
        <CheckBox color="green" value="admin" @onInput="handleChange">Admin</CheckBox>
        <CheckBox color="green" value="user" @onInput="handleChange">User</CheckBox>
        <CheckBox color="green" disabled>Manager</CheckBox>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
