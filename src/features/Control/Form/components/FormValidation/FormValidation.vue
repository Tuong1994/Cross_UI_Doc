<script setup lang="ts">
import { Form, Input, InputPassword, InputPhone, Select, DatePicker, Radio } from '@/components/Control'
import { Button, Space } from '@/components/UI'
import { formValidationReactCode, formValidationVueCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import { useFormRule } from '@/hooks'
import type { FormResult } from '@/components/Control/Form/type'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
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
  <AnchorContent :id="formCatalogIds.VALIDATION">
    <ShowCase title="Validation" :vueCode="formValidationVueCode" :reactCode="formValidationReactCode">
      <Form
        :color="layout.color"
        :initialValues="initialValues"
        :autoFocusValidation="false"
        @onFinish="handleFinish"
      >
        <Input required name="email" :rule="email()">
          <template #label>Email</template>
        </Input>
        <InputPassword required name="password" :rule="password()">
          <template #label>Password</template>
        </InputPassword>
        <InputPhone required name="phone" :rule="phone()">
          <template #label>Phone</template>
        </InputPhone>
        <DatePicker required name="birthday" :rule="requiredString()">
          <template #label>Birthday</template>
        </DatePicker>
        <Select
          required
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
          <Radio required name="gender" value="male" :rule="requiredString()">Male</Radio>
          <Radio required name="gender" value="female" :rule="requiredString()">Female</Radio>
        </Space>
        <Button type="submit">Submit</Button>
      </Form>
    </ShowCase>
  </AnchorContent>
</template>
