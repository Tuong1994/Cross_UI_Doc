<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button } from '@/components/UI'
import { formDisabledCode } from './code'
import { formCatalogIds } from '../../repository/catalogIds'
import type { FormResult } from '@/components/Control/Form/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
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

const handleFinish = (data: FormResult<Data>) => console.log(data)
</script>

<template>
  <AnchorContent :id="formCatalogIds.DISABLED">
    <ShowCase title="Disabled" :code="formDisabledCode">
      <Form
        disabled
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
    </ShowCase>
  </AnchorContent>
</template>
