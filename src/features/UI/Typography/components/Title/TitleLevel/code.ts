export const titleLevelVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title :level="1">Heading</Title>
  <Title :level="2">Heading</Title>
  <Title :level="3">Heading</Title>
  <Title :level="4">Heading</Title>
  <Title :level="5">Heading</Title>
  <Title :level="6">Heading</Title>
</template>
`

export const titleLevelReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return <>
    <Title level={1}>Heading</Title>
    <Title level={2}>Heading</Title>
    <Title level={3}>Heading</Title>
    <Title level={4}>Heading</Title>
    <Title level={5}>Heading</Title>
    <Title level={6}>Heading</Title>
  </>;
};

export default App;
`