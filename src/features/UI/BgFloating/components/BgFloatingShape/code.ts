export const bgFloatingShapeVueCode = ` 
<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import type { BgFloatingShape } from '@/components/UI/BgAnimation/type'
import helper from '@/helper'
import utils from '@/utils'

const { BgFloating } = BgAnimation

const shapes = helper.getShapeType()
</script>

<template>
  <template v-for="(shape) in shapes" :key="shape">
    <Divider>
      {{ utils.capitalizeFirstLetter(shape) }}
    </Divider>
    <div :style="{ width: '100%', height: '300px' }">
      <BgFloating :shape="shape as BgFloatingShape" />
    </div>
  </template>
</template>
`

export const bgFloatingShapeReactCode = `
import { Fragment } from "react";
import { BgAnimation, Divider } from "./components/UI";
import { BgFloatingShape } from "./components/UI/BgAnimation/type";

const { BgFloating } = BgAnimation;

const App: React.FC = () => {
  const shapes: BgFloatingShape[] = ["square", "round"];

  return shapes.map((shape) => (
    <Fragment key={shape}>
      <Divider>{shape}</Divider>
      <div style={{ width: "100%", height: "300px" }}>
        <BgFloating shape={shape} />
      </div>
    </Fragment>
  ));
};

export default App;
`
