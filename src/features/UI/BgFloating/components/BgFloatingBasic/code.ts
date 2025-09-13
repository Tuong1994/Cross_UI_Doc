export const bgFloatingBasicVueCode = `
<script setup lang="ts">
import { BgAnimation } from '@/components/UI'

const { BgFloating } = BgAnimation
</script>

<template>
  <div :style="{ width: '100%', height: '300px', borderRadius: '6px', overflow: 'hidden' }">
    <BgFloating />
  </div>
</template>
`

export const bgFloatingBasicReactCode = `
import { BgAnimation } from "./components/UI";

const { BgFloating } = BgAnimation;

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "300px", borderRadius: '6px', overflow: 'hidden' }}>
      <BgFloating />
    </div>
  );
};

export default App;
`