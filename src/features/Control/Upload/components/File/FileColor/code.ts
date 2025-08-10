export const fileColorVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <Space>
    <div v-for="color in helper.getColorType()" :key="color">
      <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
      <FileUpload :color="color as ControlColor" />
    </div>
  </Space>
</template>
`

export const fileColorReactCode = `
import { Upload } from "@/components/Control";
import { Space, Typography } from "./components/UI";
import { ControlColor } from "./components/Control/type";

const { Paragraph } = Typography;

const { FileUpload } = Upload;

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space>
      {colors.map((color) => (
        <div key={color}>
          <Paragraph>{color}</Paragraph>
          <FileUpload color={color} />
        </div>
      ))}
    </Space>
  );
};

export default App;
`