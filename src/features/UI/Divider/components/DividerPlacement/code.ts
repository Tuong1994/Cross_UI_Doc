export const dividerPlacementVueCode = `
<script setup lang="ts">
import { Divider } from '@/components/UI'
</script>

<template>
  <Divider placement="left">Left</Divider>
  <Divider placement="center">Divider</Divider>
  <Divider placement="right">Right</Divider>
  <Divider type="vertical" placement="left">Top</Divider>
  <span>Content</span>
  <Divider type="vertical" placement="center">Center</Divider>
  <span>Content</span>
  <Divider type="vertical" placement="right">Bottom</Divider>
</template>
`

export const dividerPlacementReactCode = `
import { Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Divider placement="left">Left</Divider>
      <Divider placement="center">Divider</Divider>
      <Divider placement="right">Right</Divider>
      <Divider type="vertical" placement="left">
        Top
      </Divider>
      <span>Content</span>
      <Divider type="vertical" placement="center">
        Center
      </Divider>
      <span>Content</span>
      <Divider type="vertical" placement="right">
        Bottom
      </Divider>
    </>
  );
};

export default App;
`