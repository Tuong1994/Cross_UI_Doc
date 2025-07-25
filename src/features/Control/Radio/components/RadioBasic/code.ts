export const radioBasicCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'

const handleChange = (role: string) => {
  console.log(role)
}
</script>

<template>
  <Space>
    <Radio name="role" color="green" value="admin" @onInput="handleChange">Admin</Radio>
    <Radio name="role" color="green" value="user" @onInput="handleChange">User</Radio>
    <Radio name="role" color="green" disabled>Manager</Radio>
  </Space>
</template>
`