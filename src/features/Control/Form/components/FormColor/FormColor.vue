<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button, Card, Flex } from '@/components/UI'
import { formColorReactCode, formColorVueCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
import type { FormResult } from '@/components/Control/Form/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

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
  <AnchorContent :id="formCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="formColorVueCode" :reactCode="formColorReactCode">
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
    </ShowCase>
  </AnchorContent>
</template>


