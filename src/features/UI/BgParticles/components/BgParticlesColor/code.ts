export const bgParticlesColorVueCode = `
<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import type { LayoutColor } from '@/components/UI/Layout/type'
import helper from '@/helper'
import utils from '@/utils'

const { BgParticles } = BgAnimation
</script>

<template>
  <template v-for="color in helper.getColorType()" :key="color">
    <Divider>{{ utils.capitalizeFirstLetter(color) }}</Divider>
    <div
      :style="{
        width: '100%',
        height: '300px',
        borderRadius: '6px',
        overflow: 'hidden'
      }"
    >
      <BgParticles :fullScreen="false" hasColor :color="color as LayoutColor" :id="color" />
    </div>
  </template>
</template>
`

export const bgParticlesColorReactCode = `
import { Fragment } from "react";
import { BgAnimation, Divider } from "./components/UI";
import { LayoutColor } from "./components/UI/Layout/Context";

const { BgParticles } = BgAnimation;

const App: React.FC = () => {
  const colors: LayoutColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return colors.map((color) => (
    <Fragment key={color}>
      <Divider>{color}</Divider>
      <div style={{ width: "100%", height: "300px", borderRadius: '6px', overflow: 'hidden' }}>
        <BgParticles hasColor fullScreen={false} id={color} color={color} />
      </div>
    </Fragment>
  ));
};

export default App;
`
