export const toastTypeVueCode = `
<script setup lang="ts">
import { ToastMessage, Button, Space } from '@/components/UI'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage()
</script>

<template>
  <Space>
    <Button color="green" @click="messageApi.success('This is a success message')">Success</Button>
    <Button color="red" @click="messageApi.error('This is a error message')">Error</Button>
    <Button color="orange" @click="messageApi.warning('This is a warning message')">Warning</Button>
    <Button color="blue" @click="messageApi.info('This is a info message')">Info</Button>
  </Space>
  <ToastMessage />
</template>
`

export const toastTypeReactCode = `
import { ToastMessage, Space, Button } from "./components/UI";
import useMessage from "./components/UI/ToastMessage/useMessage";

const App: React.FC = () => {
  const messageApi = useMessage();

  return (
    <>
      <Space>
        <Button color="green" onClick={() => messageApi.success("This is a success message")}>
          Success
        </Button>
        <Button color="red" onClick={() => messageApi.error("This is a error message")}>
          Error
        </Button>
        <Button color="orange" onClick={() => messageApi.warning("This is a warning message")}>
          Warning
        </Button>
        <Button color="blue" onClick={() => messageApi.info("This is a info message")}>
          Info
        </Button>
      </Space>
      <ToastMessage />
    </>
  );
};

export default App;
`