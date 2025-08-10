export const multipleImageColorVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Divider } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload
</script>

<template>
  <template v-for="color in helper.getColorType()" :key="color">
    <Divider>{{ utils.capitalizeFirstLetter(color) }}</Divider>
    <MultipleImageUpload :color="color as ControlColor" rootClassName="section-space" />
  </template>
</template>
`

export const multipleImageColorReactCode = `
import { Fragment } from "react";
import { Upload } from "@/components/Control";
import { Divider } from "./components/UI";
import { ControlColor } from "./components/Control/type";

const { ImageUpload } = Upload;

const { MultipleImageUpload } = ImageUpload;

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return colors.map((color) => (
    <Fragment key={color}>
      <Divider>{color}</Divider>
      <MultipleImageUpload color={color} />
    </Fragment>
  ));
};

export default App;
`