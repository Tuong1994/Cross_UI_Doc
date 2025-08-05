export const formShapeVueCode = `
<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Card, Button, Flex } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
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

const shapes: ControlShape[] = ['round', 'square']

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <FlexRow>
    <FlexCol v-for="shape in shapes" :key="shape" :span="12">
      <Card>
        <template #body>
          <Form
            :shape="shape"
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
            <Button type="submit" :shape="shape">Submit</Button>
          </Form>
        </template>
      </Card>
    </FlexCol>
  </FlexRow>
</template>
`

export const formShapeReactCode = ` 
import { Form, Input, InputPassword, FormItem } from "@/components/Control";
import { Flex, Button, Card } from "./components/UI";
import { ControlShape } from "./components/Control/type";

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

  const shapes: ControlShape[] = ['round', 'square']

  const handleFinish = (data: Data) => console.log(data)

  return (
    <FlexRow>
      {shapes.map((shape) => (
        <FlexCol key={shape} span={12}>
          <Card>
            <Form<Data> shape={shape} initialData={initialValues} autoFocusValidation={false} onFinish={handleFinish}>
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
