export const alertBasicVueCode = `
<script setup lang="ts">
import { Alert, Button } from '@/components/UI'
import useAlert from '@/components/UI/Alert/useAlert'

const alertApi = useAlert()
</script>

<template>
  <Button color="blue" @click="() => alertApi.info('This is a message')">Show alert</Button>
  <Alert />
</template>
`

export const alertBasicReactCode = `
import { Alert, Button } from "./components/UI";
import useAlert from "./components/UI/Alert/useAlert";

const App: React.FC = () => {
  const alertApi = useAlert();
  
  return (
    <>
      <Button onClick={() => alertApi.success("This is success message")}>Show alert</Button>
      <Alert />
    </>
  );
};

export default App;
`