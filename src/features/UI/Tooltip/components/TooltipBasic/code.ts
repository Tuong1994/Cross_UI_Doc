export const tooltipBasicVueCode = `
<script setup lang="ts">
import { Tooltip, Button } from '@/components/UI'
</script>

<template>
  <Tooltip>
    <template #title>
      <Button>Hover me</Button>
    </template>
    <template #content>Tooltip Popup</template>
  </Tooltip>
</template>
`

export const tooltipBasicReactCode = `
import { Button, Tooltip } from "./components/UI";

const App: React.FC = () => {
  return (
    <Tooltip content="Tooltip popup">
      <Button>Hover me</Button>
    </Tooltip>
  );
};

export default App;
`
