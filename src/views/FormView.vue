<script setup lang="ts">
import { Form,
  Input,
  InputPassword,
  InputPhone,
  InputNumber,
  TextArea,
  Select,
  SelectTag,
  TreeSelect,
  DatePicker,
  CheckBox,
  Radio,
  Upload } from '@/components/Control'

const { FileUpload, ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

interface Data {
  email: string
  password: string
  phone: string
  note: string
  gender: string
  role: number
  point: number
  tags: string | number[]
  birthday: Date
}

const initialValues: Data = {
  email: '',
  password: '',
  phone: '',
  note: '',
  role: -1,
  gender: '',
  tags: [],
  point: 0,
  birthday: new Date()
}
</script>

<template>
  <!-- <Form
      :initialValues="initialValues"
      :autoFocusValidation="false"
      @onFinish="(value: Data) => console.log({data: inputValue})"
    >
      <MultipleImageUpload />

      <FileUpload />
      <Input name="email">
        <template #label>Email</template>
      </Input>
      <InputPassword name="password">
        <template #label>Password</template>
      </InputPassword>
      <InputPhone name="phone">
        <template #label>Phone</template>
      </InputPhone>
      <Select
        name="role"
        :options="[
          { label: 'admin', value: 1 },
          { label: 'user', value: 2 }
        ]"
      >
        <template #label>Role</template>
      </Select>
      <SelectTag
        name="tags"
        :options="[
          { label: 'tag 1', value: 1 },
          { label: 'tag 2', value: 2 },
          { label: 'tag 3', value: 3 }
        ]"
      >
        <template #label>Tags</template>
      </SelectTag>
      <InputNumber name="point">
        <template #label>Point</template>
      </InputNumber>
      <DatePicker name="birthday">
        <template #label>Birthday</template>
      </DatePicker>
      <TextArea name="note">
        <template #label>Note</template>
      </TextArea>
      <CheckBox>Male</CheckBox>
      <Radio>Male</Radio>
      <Button type="submit">Submit</Button>
    </Form> -->
</template>
