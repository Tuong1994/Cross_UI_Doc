export const dividerDashedVueCode = `
<script setup lang="ts">
import { Divider } from '@/components/UI'
</script>

<template>
  <Divider dashed placement="center">Divider</Divider>
  <Divider dashed type="vertical" placement="center">Divider</Divider>
</template>
`

export const dividerDashedReactCode = `
import { Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Divider dashed placement="center">
        Divider
      </Divider>
      <Divider dashed type="vertical" placement="center">
        Divider
      </Divider>
    </>
  );
};

export default App;
`