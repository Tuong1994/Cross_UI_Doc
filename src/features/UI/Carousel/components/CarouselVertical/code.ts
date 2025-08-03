export const carouselVerticalVueCode = `
<script setup lang="ts">
import { Carousel } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import type { StyleValue } from 'vue'

const { Vertical } = Carousel

const slideNames = {
  slideOne: 'slide-1',
  slideTwo: 'slide-2',
  slideThree: 'slide-3'
} as const

const items: CarouselItems = [
  { id: '1', comName: slideNames.slideOne },
  { id: '2', comName: slideNames.slideTwo },
  { id: '3', comName: slideNames.slideThree }
]

const rootStyle: StyleValue = {
  height: '400px'
}

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
</script>

<template>
  <Vertical infinite :rootStyle="rootStyle" :items="items" slideId="carouselVertical">
    <template #content="item">
      <div v-if="item.slide === slideNames.slideOne" :style="slideStyle">Slide 1</div>
      <div v-if="item.slide === slideNames.slideTwo" :style="slideStyle">Slide 2</div>
      <div v-if="item.slide === slideNames.slideThree" :style="slideStyle">Slide 3</div>
    </template>
  </Vertical>
</template>
`

export const carouselVerticalReactCode = `
import { CSSProperties } from "react";
import { Carousel } from "./components/UI";
import { CarouselItems } from "./components/UI/Carousel/type";

const { Vertical } = Carousel;

const App: React.FC = () => {
  const style: CSSProperties = {
    height: "400px",
  };

  const slideStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    background: "#444",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "5px solid #ddd",
    color: "#fff",
  };

  const items: CarouselItems = [
    { id: "slide-1", content: <div style={slideStyle}>Slide 1</div> },
    { id: "slide-2", content: <div style={slideStyle}>Slide 2</div> },
    { id: "slide-3", content: <div style={slideStyle}>Slide 3</div> },
  ];

  return <Vertical infinite style={style} items={items} slideId="carouselVertical" />;
};

export default App;
`
