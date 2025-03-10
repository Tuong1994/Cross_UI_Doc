<script setup lang="ts">
import { Form, Input, InputPassword } from '@/components/Control'
import { Button, Card, Flex } from '@/components/UI'
import { formColorCode } from './code'
import { formCatalogIds } from '../../repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
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
</script>

<template>
  <AnchorContent :id="formCatalogIds.COLOR">
    <ShowCase title="Color" :code="formColorCode">
      <FlexRow>
        <FlexCol v-for="color in colors" :key="color" :span="8">
          <Card>
            <template #body>
              <Form :color="color" :initialValues="initialValues" :autoFocusValidation="false">
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
