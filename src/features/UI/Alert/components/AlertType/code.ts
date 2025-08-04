export const alertTypeVueCode = `
<script setup lang="ts">
import { Alert, Space, Button } from '@/components/UI'
import useAlert from '@/components/UI/Alert/useAlert'

const alertApi = useAlert()
</script>

<template>
  <Space>
    <Button color="green" @click="() => alertApi.success('This is a success message')">Success</Button>
    <Button color="red" @click="() => alertApi.error('This is a error message')">Error</Button>
    <Button color="orange" @click="() => alertApi.warning('This is a warning message')">Warningss</Button>
    <Button color="blue" @click="() => alertApi.info('This is a info message')">Info</Button>
  </Space>
  <Alert />
</template>
`

export const alertTypeReactCode = `
import { Alert, Space, Button } from "./components/UI";
import useAlert from "./components/UI/Alert/useAlert";

const App: React.FC = () => {
  const alertApi = useAlert();

  return (
    <>
      <Space>
        <Button color="green" onClick={() => alertApi.success("This is a success message")}>
          Success
        </Button>
        <Button color="red" onClick={() => alertApi.error("This is a error message")}>
          Error
        </Button>
        <Button color="orange" onClick={() => alertApi.warning("This is a warning message")}>
          Warningss
        </Button>
        <Button color="blue" onClick={() => alertApi.info("This is a info message")}>
          Info
        </Button>
      </Space>
      <Alert />
    </>
  );
};

export default App;
`
