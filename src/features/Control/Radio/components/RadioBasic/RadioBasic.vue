<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { radioBasicCode } from './code'
import { radioCatalogIds } from '@/features/Control/Radio/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <AnchorContent :id="radioCatalogIds.BASIC">
    <ShowCase title="Basic" :code="radioBasicCode">
      <Space>
        <Radio name="role" color="green" value="admin" @onInput="handleChange">Admin</Radio>
        <Radio name="role" color="green" value="user" @onInput="handleChange">User</Radio>
        <Radio name="role" color="green" disabled>Manager</Radio>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
