export const singleImageShapeVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <Space size="md">
    <div v-for="shape in helper.getShapeType()" :key="shape">
      <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
      <SingleImageUpload :shape="shape as ControlShape" color="green" />
    </div>
  </Space>
</template>
`

export const singleImageShapeReactCode = `
import { ControlShape } from "./components/Control/type";
import { Space, Typography } from "./components/UI";
import { Upload } from "@/components/Control";

const { ImageUpload } = Upload;

const { Paragraph } = Typography;

const { SingleImageUpload } = ImageUpload;

const App: React.FC = () => {
  const shapes: ControlShape[] = ["square", "round"];

  return (
    <Space size="md">
      {shapes.map((shape) => (
        <div key={shape}>
          <Paragraph>{shape}</Paragraph>
          <SingleImageUpload shape={shape} />
        </div>
      ))}
    </Space>
  );
};

export default App;
`