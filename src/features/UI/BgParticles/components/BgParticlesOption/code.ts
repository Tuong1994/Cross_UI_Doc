export const bgParticlesOptionVueCode = `
<script setup lang="ts">
import { BgAnimation, Divider } from '@/components/UI'
import useParticles from '@/components/UI/BgAnimation/BgParticles/useParticles'
import utils from '@/utils'

const { BgParticles } = BgAnimation

const { linksOptions, bubbleOptions, collideOptions, grabsOptions, twinkleOptions } = useParticles({
  fullScreen: false,
  hasColor: true,
  color: 'purple'
})

const options = [
  { id: 'links', type: linksOptions.value },
  { id: 'bubble', type: bubbleOptions.value },
  { id: 'collide', type: collideOptions.value },
  { id: 'grabs', type: grabsOptions.value },
  { id: 'twinkle', type: twinkleOptions.value }
]
</script>

<template>
  <template v-for="option in options" :key="option">
    <Divider>{{ utils.capitalizeFirstLetter(option.id) }}</Divider>
    <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
      <BgParticles :id="option.id" :options="option.type" />
    </div>
  </template>
</template>
`

export const bgParticlesOptionReactCode = `
import { Fragment } from "react";
import { BgAnimation, Divider } from "./components/UI";
import useParticles from "./components/UI/BgAnimation/BgParticles/useParticles";

const { BgParticles } = BgAnimation;

const App: React.FC = () => {
  const { linksOptions, bubbleOptions, collideOptions, grabsOptions, twinkleOptions } = useParticles({
    fullScreen: false,
    hasColor: true,
    color: "purple",
  });

  const options = [
    { id: "links", type: linksOptions },
    { id: "bubble", type: bubbleOptions },
    { id: "collide", type: collideOptions },
    { id: "grabs", type: grabsOptions },
    { id: "twinkle", type: twinkleOptions },
  ];

  return options.map((option) => (
    <Fragment key={option.id}>
      <Divider>{option.id}</Divider>
      <div style={{ width: "100%", height: "300px" }}>
        <BgParticles id={option.id} options={option.type} />
      </div>
    </Fragment>
  ));
};

export default App;
`