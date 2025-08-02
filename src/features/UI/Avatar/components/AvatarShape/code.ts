export const avatarShapeVueCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" shape="circle" />
    <Avatar :size="avatarSize" shape="square" />
  </Space>
</template>
`

export const avatarShapeReactCode = `
import { Space, Avatar } from "./components/UI";

const size = 50;

const App: React.FC = () => {
  return (
    <Space>
      <Avatar size={size} shape="circle" />
      <Avatar size={size} shape="square" />
    </Space>
  );
};

export default App;
`