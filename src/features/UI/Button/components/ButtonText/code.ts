export const buttonTextVueCode = `
<script setup lang="ts">
import { Button } from '@/components/UI'
</script>

<template>
  <Button text>Button</Button>
</template>
`

export const buttonTextReactCode = `
import { Button } from "./components/UI";

const App: React.FC = () => {
  return <Button text>Button</Button>;
};

export default App;
`