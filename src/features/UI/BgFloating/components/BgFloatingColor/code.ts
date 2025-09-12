export const bgFloatingColorVueCode = `
<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import type { LayoutColor } from '@/components/UI/Layout/type'
import helper from '@/helper'
import utils from '@/utils'

const { BgFloating } = BgAnimation

const colors = helper.getColorType()
</script>

<template>
  <template v-for="(color, idx) in colors" :key="color">
    <Divider>
      {{ utils.capitalizeFirstLetter(color) }}
    </Divider>
    <div :style="{ width: '100%', height: '300px' }">
      <BgFloating :color="color as LayoutColor" />
    </div>
  </template>
</template>
`

export const bgFloatingColorReactCode = `
import { Fragment } from "react";
import { BgAnimation, Divider } from "./components/UI";
import { LayoutColor } from "./components/UI/Layout/Context";

const { BgFloating } = BgAnimation;

const App: React.FC = () => {
  const colors: LayoutColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return colors.map((color) => (
    <Fragment key={color}>
      <Divider>{color}</Divider>
      <div style={{ width: "100%", height: "300px" }}>
        <BgFloating color={color} />
      </div>
    </Fragment>
  ));
};

export default App;
`
