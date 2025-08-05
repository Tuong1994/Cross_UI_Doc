export const formColorVueCode = `
<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button, Card, Flex } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
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

const colors: ControlColor[] = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <FlexRow>
    <FlexCol v-for="color in colors" :key="color" :span="8">
      <Card>
        <template #body>
          <Form :color="color" :initialValues="initialValues" :autoFocusValidation="false" @onFinish="handleFinish">
            <Input name="email">
              <template #label>Email</template>
            </Input>
            <InputPassword name="password">
              <template #label>Password</template>
            </InputPassword>
            <Button type="submit">Submit</Button>
          </Form>
        </template>
      </Card>
    </FlexCol>
  </FlexRow>
</template>
`

export const formColorReactCode = `
import { Form, Input, InputPassword, FormItem } from "@/components/Control";
import { Flex, Button, Card } from "./components/UI";
import { ControlColor } from "./components/Control/type";

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

  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const handleFinish = (data: Data) => console.log(data)

  return (
    <FlexRow>
      {colors.map((color) => (
        <FlexCol key={color} span={8}>
          <Card>
            <Form<Data> color={color} initialData={initialValues} autoFocusValidation={false} onFinish={handleFinish}>
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
