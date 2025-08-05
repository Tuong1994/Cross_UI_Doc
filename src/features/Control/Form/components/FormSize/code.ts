export const formSizeVueCode = `
<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button, Card, Flex } from '@/components/UI'
import type { ComponentSize } from '@/common/type'
import type { FormResult } from '@/components/Control/Form/type'

const { FlexRow, FlexCol } = Flex

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
  <FlexRow>
    <FlexCol v-for="size in sizes" :key="size" :span="8">
      <Card>
        <template #body>
          <Form
            :sizes="size"
            :color="layout.color"
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
            <Button :sizes="size" type="submit">Submit</Button>
          </Form>
        </template>
      </Card>
    </FlexCol>
  </FlexRow>
</template>
`

export const formSizeReactCode = `
import { Form, Input, InputPassword, FormItem } from "@/components/Control";
import { Flex, Button, Card } from "./components/UI";
import { ComponentSize } from "./common/type";

const { FlexRow, FlexCol } = Flex;

const App: React.FC = () => {
  interface Data {
    email: string;
    password: string;
  }

  const initialValues: Data = {
    email: "",
    password: "",
  };

  const sizes: ComponentSize[] = ['sm', 'md', 'lg']

  const handleFinish = (data: Data) => console.log(data)

  return (
    <FlexRow>
      {sizes.map((size) => (
        <FlexCol key={size} span={8}>
          <Card>
            <Form<Data> sizes={size} initialData={initialValues} autoFocusValidation={false} onFinish={handleFinish}>
              <FormItem name="email">
                <Input label="Email" />
              </FormItem>
              <FormItem name="password">
                <InputPassword label="password" />
              </FormItem>
              <Button type="submit">Submit</Button>
            </Form>
          </Card>
        </FlexCol>
      ))}
    </FlexRow>
  );
};

export default App;
`
