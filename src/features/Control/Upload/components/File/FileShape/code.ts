export const fileShapeVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <Space>
    <div v-for="shape in helper.getShapeType()" :key="shape">
      <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
      <FileUpload color="green" :shape="shape as ControlShape" />
    </div>
  </Space>
</template>
`

export const fileShapeReactCode = `
import { Upload } from "@/components/Control";
import { Space, Typography } from "./components/UI";
import { ControlShape } from "./components/Control/type";

const { Paragraph } = Typography;

const { FileUpload } = Upload;

const App: React.FC = () => {
  const shapes: ControlShape[] = ["square", "round"];

  return (
    <Space>
      {shapes.map((shape) => (
        <div key={shape}>
          <Paragraph>{shape}</Paragraph>
          <FileUpload shape={shape} />
        </div>
      ))}
    </Space>
  );
};

export default App;
`