export const imageBasicVueCode = `
<script setup lang="ts">
import { Image } from '@/components/UI'
</script>

<template>
  <Image src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1" :imgWidth="150" :imgHeight="150" />
</template>
`

export const imageBasicReactCode = `
import { Image } from "./components/UI";

const App: React.FC = () => {
  return (
    <Image
      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
      imgWidth={150}
      imgHeight={150}
    />
  );
};

export default App;
`