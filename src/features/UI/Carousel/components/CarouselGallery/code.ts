export const carouselGalleryVueCode = `
<script setup lang="ts">
import { ref, type StyleValue } from 'vue'
import { Carousel, Button } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'

const { Gallery } = Carousel

const slideNames = {
  slideOne: 'slide-1',
  slideTwo: 'slide-2',
  slideThree: 'slide-3'
} as const

const items: CarouselItems = [
  {
    id: '1',
    comName: slideNames.slideOne,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  },
  {
    id: '2',
    comName: slideNames.slideTwo,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  },
  {
    id: '3',
    comName: slideNames.slideThree,
    url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
  }
]

const slideStyle: StyleValue = {
  width: '100%',
  height: '100%',
  background: '#444',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '5px solid #ddd',
  color: '#fff'
}

const open = ref<boolean>(false)

const handleOpen = () => (open.value = !open.value)
</script>

<template>
  <Button @click="handleOpen">Open gallery</Button>
  <Gallery :open="open" :items="items" slideId="carouselGallery" @onClose="handleOpen">
    <template #content="item">
      <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
      <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
      <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
    </template>
  </Gallery>
</template>
`

export const carouselGalleryReactCode = `
import { useState } from "react";
import { Button, Carousel } from "./components/UI";
import { CarouselItems } from "./components/UI/Carousel/type";

const { Gallery } = Carousel;

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const items: CarouselItems = [
    {
      id: "slide-1",
      url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1",
    },
    {
      id: "slide-2",
      url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1",
    },
    {
      id: "slide-3",
      url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1",
    },
  ];

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen}>Open gallery</Button>
      <Gallery open={open} items={items} slideId="carouselGallery" onClose={handleOpen} />
    </>
  );
};

export default App;

`
