export const avatarSizeVueCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
</script>

<template>
  <Space>
    <Avatar :size="20" />
    <Avatar :size="40" />
    <Avatar :size="60" />
    <Avatar :size="80" />
  </Space>
</template>
`

export const avatarSizeReactCode = `
import { Space, Avatar } from "./components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <Avatar size={20} />
      <Avatar size={40} />
      <Avatar size={60} />
      <Avatar size={80} />
    </Space>
  );
};

export default App;
`