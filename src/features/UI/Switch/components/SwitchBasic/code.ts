export const switchBasicVueCode = `
<script setup lang="ts">
import { Switch } from '@/components/UI'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <Switch @onSwitch="handleSwitch" />
</template>
`

export const switchBasicReactCode = `
import { Switch } from "./components/UI";

const App: React.FC = () => {
  const handleSwitch = (switched: boolean) => {
    console.log(switched);
  };

  return <Switch onSwitch={handleSwitch} />;
};

export default App;
`