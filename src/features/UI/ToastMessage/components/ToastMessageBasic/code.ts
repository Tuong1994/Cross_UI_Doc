export const toastBasicVueCode = `
<script setup lang="ts">
import { ToastMessage, Button } from '@/components/UI'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage()
</script>

<template>
  <Button color="green" @click="messageApi.success('This is a success message')">Show message</Button>
  <ToastMessage />
</template>
`

export const toastBasicReactCode = `
import { ToastMessage, Button } from "./components/UI";
import useMessage from "./components/UI/ToastMessage/useMessage";

const App: React.FC = () => {
  const messageApi = useMessage();

  return (
    <>
      <Button onClick={() => messageApi.success("This is a success message")}>Show message</Button>
      <ToastMessage />
    </>
  );
};

export default App;
`