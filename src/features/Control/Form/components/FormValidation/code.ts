export const formValidationCode = `
<script setup lang="ts">
import { Form, Input, InputPassword, InputPhone, Select, DatePicker, Radio } from '@/components/Control'
import { Button, Space } from '@/components/UI'
import { useFormRule } from '@/hooks'
import type { FormResult } from '@/components/Control/Form/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface Data {
  email: string
  password: string
  phone: string
  gender: string
  role: string
  birthday: Date
}

const { requiredString, email, password, phone } = useFormRule()

const layout = useLayoutStore()

const initialValues: Data = {
  email: '',
  password: '',
  phone: '',
  gender: '',
  role: '',
  birthday: new Date()
}

const handleFinish = (payload: FormResult<Data>) => console.log(payload)
</script>

<template>
  <Form
    :color="layout.color"
    :initialValues="initialValues"
    :autoFocusValidation="false"
    @onFinish="handleFinish"
  >
    <Input name="email" :rule="email()">
      <template #label>Email</template>
    </Input>
    <InputPassword name="password" :rule="password()">
      <template #label>Password</template>
    </InputPassword>
    <InputPhone name="phone" :rule="phone()">
      <template #label>Phone</template>
    </InputPhone>
    <DatePicker name="birthday" :rule="requiredString()">
      <template #label>Birthday</template>
    </DatePicker>
    <Select
      name="role"
      :rule="requiredString()"
      :options="[
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' }
      ]"
    >
      <template #label>Role</template>
    </Select>
    <Space>
      <Radio name="gender" value="male" :rule="requiredString()">Male</Radio>
      <Radio name="gender" value="female" :rule="requiredString()">Female</Radio>
    </Space>
    <Button type="submit">Submit</Button>
  </Form>
</template>
`
