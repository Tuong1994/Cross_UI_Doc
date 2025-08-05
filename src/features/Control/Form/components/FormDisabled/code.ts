export const formDisabledVueCode = `
<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button } from '@/components/UI'
import type { FormResult } from '@/components/Control/Form/type'

interface Data {
  email: string
  password: string
}

const initialValues: Data = {
  email: '',
  password: ''
}

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <Form
    color="blue"
    disabled
    :initialValues="initialValues"
    :autoFocusValidation="false"
    @onFinish="handleFinish"
  >
    <Input name="email">
      <template #label>Email</template>
    </Input>
    <InputPassword name="password">
      <template #label>Password</template>
    </InputPassword>
    <Button type="submit">Submit</Button>
  </Form>
</template>
`

export const formDisabledReactCode = `
import { Form, Input, InputPassword, FormItem } from "@/components/Control";
import { Button } from "@/components/UI";

const App: React.FC = () => {
  interface Data {
    email: string;
    password: string;
  }

  const initialValues: Data = {
    email: "",
    password: "",
  };

  const handleFinish = (data: Data) => console.log(data);

  return (
    <Form<Data> disabled initialData={initialValues} autoFocusValidation={false} onFinish={handleFinish}>
      <FormItem name="email">
        <Input label="Email" />
      </FormItem>
      <FormItem name="password">
        <InputPassword label="Password" />
      </FormItem>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default App;
`