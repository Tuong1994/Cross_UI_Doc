export const imageSizeVueCode = `
<script setup lang="ts">
import { Divider, Image } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const imageSizes = ['sm', 'md', 'lg']

const dividerContent = (size: string) => {
  const content: Record<string, string> = {
    sm: t.lang.image.size.sm,
    md: t.lang.image.size.md,
    lg: t.lang.image.size.lg
  }
  return content[size]
}
</script>

<template>
  <template v-for="size in imageSizes" :key="size">
    <Divider>
      {{ dividerContent(size) }}
    </Divider>
    <Image
      :size="size"
      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
    />
  </template>
</template>
`

export const imageSizeReactCode = `
import { Fragment } from "react";
import { Image, Divider } from "./components/UI";
import { ImageSize } from "./components/UI/Image/type";

const App: React.FC = () => {
  const sizes: ImageSize[] = ["sm", "md", "lg"];

  const renderContent = () => {
    return sizes.map((size) => (
      <Fragment key={size}>
        <Divider>{size}</Divider>
        <Image
          size={size}
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
        />
      </Fragment>
    ));
  };

  return renderContent();
};

export default App;
`