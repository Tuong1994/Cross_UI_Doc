export const avatarBasicVueCode = `
<script setup lang="ts">
import { Space, Avatar, Image } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" />
    <Avatar :size="avatarSize" letter="T" />
    <Avatar :size="avatarSize">
      <Image />
    </Avatar>
  </Space>
</template>
`

export const avatarBasicReactCode = `
import { Space, Avatar, Image } from "./components/UI";

const size = 50;

const App: React.FC = () => {
  return (
    <>
      <Space>
        <Avatar size={size} />
        <Avatar size={size} letter="T" />
        <Avatar size={size}>
          <Image />
        </Avatar>
      </Space>
    </>
  );
};

export default App;
`