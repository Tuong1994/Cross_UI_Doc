<script setup lang="ts">
import { Button, Card, Flex } from '@/components/UI'
import { Form, Input, InputPassword } from '@/components/Control'
import { formSizeVueCode, formSizeReactCode } from './code'
import { formCatalogIds } from '@/features/Control/Form/repository/catalogIds'
import type { ComponentSize } from '@/common/type'
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

const sizes: ComponentSize[] = ['sm', 'md', 'lg']

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <AnchorContent :id="formCatalogIds.SIZE">
    <ShowCase title="Size" :vueCode="formSizeVueCode" :reactCode="formSizeReactCode">
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
    </ShowCase>
  </AnchorContent>
</template>


