export const formValidationVueCode = `
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
</template>
`

export const formValidationReactCode = `
import {
  Form,
  Input,
  InputPassword,
  InputPhone,
  Select,
  DatePicker,
  Radio,
  FormItem,
} from "@/components/Control";
import { Button } from "@/components/UI";
import { useFormRule } from "./hooks";

const App: React.FC = () => {
  const { required, email, password, phone } = useFormRule();

  interface Data {
    email: string;
    password: string;
    phone: string;
    gender: string;
    role: string;
    birthday: Date;
  }

  const initialValues: Data = {
    email: "",
    password: "",
    phone: "",
    role: "",
    gender: "",
    birthday: new Date(),
  };

  const handleFinish = (data: Data) => console.log(data);

  return (
    <Form<Data> initialData={initialValues} autoFocusValidation={false} onFinish={handleFinish}>
      <FormItem name="email" rules={email()}>
        <Input required label="Email" />
      </FormItem>
      <FormItem name="password" rules={password()}>
        <InputPassword required label="Password" />
      </FormItem>
      <FormItem name="phone" rules={phone()}>
        <InputPhone required label="Phone" />
      </FormItem>
      <FormItem name="role" rules={required()}>
        <Select
          required
          label="Role"
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
          ]}
        />
      </FormItem>
      <FormItem name="birthday" rules={required()}>
        <DatePicker required label="Birthday" />
      </FormItem>
      <FormItem name="gender" rules={required()}>
        <Radio required value="male" label="Male" />
        <Radio required value="female" label="Female" />
      </FormItem>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default App;
`