<script setup lang="ts">
import { Button, Card, Flex } from '@/components/UI'
import { Form, Input, InputPassword } from '@/components/Control'
import { formCatalogIds } from '../../repository/catalogIds'
import { formSizeCode } from './code'
import type { ComponentSize } from '@/common/type'
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

const handleFinish = (data: Data) => console.log(data)
</script>

<template>
  <AnchorContent :id="formCatalogIds.SIZE">
    <ShowCase title="Size" :code="formSizeCode">
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
                <Button type="submit">Submit</Button>
              </Form>
            </template>
          </Card>
        </FlexCol>
      </FlexRow>
    </ShowCase>
  </AnchorContent>
</template>
