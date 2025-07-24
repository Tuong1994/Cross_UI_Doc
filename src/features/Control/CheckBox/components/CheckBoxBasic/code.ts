export const checkboxBasicCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <Space>
    <CheckBox color="green" value="admin" @onInput="handleChange">Admin</CheckBox>
    <CheckBox color="green" value="user" @onInput="handleChange">User</CheckBox>
    <CheckBox color="green" disabled>Manager</CheckBox>
  </Space>
</template>
`