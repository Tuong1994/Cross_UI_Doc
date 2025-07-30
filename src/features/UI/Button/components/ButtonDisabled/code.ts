export const buttonDisabledVueCode = `
<script setup lang="ts">
import { Button } from '@/components/UI'
</script>

<template>
  <Button disabled>Button</Button>
</template>
`

export const buttonDisabledReactCode = `
import { Button } from "./components/UI";

const App: React.FC = () => {
  return <Button disabled>Button</Button>;
};

export default App;
`
