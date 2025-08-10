export const singleImageColorVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <Space size="md">
    <div v-for="color in helper.getColorType()" :key="color">
      <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
      <SingleImageUpload :color="color as ControlColor" />
    </div>
  </Space>
</template>
`

export const singleImageColorReactCode = `
import { ControlColor } from "./components/Control/type";
import { Space, Typography } from "./components/UI";
import { Upload } from "@/components/Control";

const { ImageUpload } = Upload;

const { Paragraph } = Typography;

const { SingleImageUpload } = ImageUpload;

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space size="md">
      {colors.map((color) => (
        <div key={color}>
          <Paragraph>{color}</Paragraph>
          <SingleImageUpload color={color} />
        </div>
      ))}
    </Space>
  );
};

export default App;
`