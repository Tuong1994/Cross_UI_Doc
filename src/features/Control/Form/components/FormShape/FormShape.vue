<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Card, Button, Flex } from '@/components/UI'
import { formShapeReactCode, formShapeVueCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import type { FormResult } from '@/components/Control/Form/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { FlexRow, FlexCol } = Flex

interface Data {
  email: string
  password: string
}

const layout = useLayoutStore()

const initialValues: Data = {
  email: '',
  password: ''
}

const shapes: ControlShape[] = ['round', 'square']

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <AnchorContent :id="formCatalogIds.SHAPE">
    <ShowCase title="Shape" code="" :vueCode="formShapeVueCode" :reactCode="formShapeReactCode">
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
    </ShowCase>
  </AnchorContent>
</template>


