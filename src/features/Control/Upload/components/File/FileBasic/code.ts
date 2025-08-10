export const fileBasicVueCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'

const { FileUpload } = Upload

const handleUpload = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <FileUpload color="green" @onUpload="handleUpload" />
</template>
`

export const fileBasicReactCode = `
import { Upload } from "@/components/Control";

const { FileUpload } = Upload;

const App: React.FC = () => {
  const handleUpload = (files: File[]) => console.log(files);

  return <FileUpload onUpload={handleUpload} />;
};

export default App;
`