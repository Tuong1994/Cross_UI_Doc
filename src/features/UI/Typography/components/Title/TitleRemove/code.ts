export const titleRemoveVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title remove>Heading</Title>
</template>
`

export const titleRemoveReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return <Title remove>Heading</Title>;
};

export default App;
`
