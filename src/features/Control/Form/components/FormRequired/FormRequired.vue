<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button } from '@/components/UI'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import { formCatalogIds } from '../../repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import { formRequiredCode } from './code'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface Data {
  email: string
  password: string
}

const layout = useLayoutStore()

const initialValues: Data = {
  email: '',
  password: ''
}

const handleFinish = (data: Data) => console.log(data)
</script>

<template>
  <AnchorContent :id="formCatalogIds.REQUIRED">
    <ShowCase title="Required" :code="formRequiredCode">
      <Form
        :color="layout.color"
        :initialValues="initialValues"
        :autoFocusValidation="false"
        @onFinish="handleFinish"
      >
        <Input name="email" required>
          <template #label>Email</template>
        </Input>
        <InputPassword name="password" required>
          <template #label>Password</template>
        </InputPassword>
        <Button type="submit">Submit</Button>
      </Form>
    </ShowCase>
  </AnchorContent>
</template>
