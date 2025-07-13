export const formBasicCode = `
<script setup lang="ts">
import {
  Form,
  Input,
  InputPassword,
  InputPhone,
  TextArea,
  Select,
  DatePicker,
} from '@/components/Control'
import { Button } from '@/components/UI'

interface Data {
  email: string
  password: string
  phone: string
  note: string
  gender: string
  role: number
  birthday: Date
}

const initialValues: Data = {
  email: '',
  password: '',
  phone: '',
  note: '',
  role: -1,
  gender: '',
  birthday: new Date()
}

const handleFinish = (data: Data) => console.log(data)
</script>

<template>
  <Form :initialValues="initialValues" :autoFocusValidation="false" @onFinish="handleFinish">
    <Input name="email">
      <template #label>Email</template>
    </Input>
    <InputPassword name="password">
      <template #label>Password</template>
    </InputPassword>
    <InputPhone name="phone">
      <template #label>Phone</template>
    </InputPhone>
    <Select
      name="role"
      :options="[
        { label: 'admin', value: 1 },
        { label: 'user', value: 2 }
      ]"
    >
      <template #label>Role</template>
    </Select>
    <DatePicker name="birthday">
      <template #label>Birthday</template>
    </DatePicker>
    <TextArea name="note">
      <template #label>Note</template>
    </TextArea>
    <Button type="submit">Submit</Button>
  </Form>
</template>
`
