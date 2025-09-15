export const bgParticlesBasicVueCode = `
<script setup lang="ts">
import { BgAnimation } from '@/components/UI'

const { BgParticles } = BgAnimation
</script>

<template>
  <div :style="{ width: '100%', height: '300px' }">
    <BgParticles :fullScreen="false" />
  </div>
</template>
`

export const bgParticlesBasicReactCode = `
import { BgAnimation } from "./components/UI";

const { BgParticles } = BgAnimation;

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <BgParticles fullScreen={false} />
    </div>
  );
};

export default App;
`