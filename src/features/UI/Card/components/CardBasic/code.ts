export const cardBasicVueCode = `
<script setup lang="ts">
import { Card } from '@/components/UI'
</script>

<template>
  <Card>
    <template #body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam facilis vel libero dolorem ab
      consequatur eaque quidem rem! Quisquam, nulla officia quod porro voluptatibus earum in quae numquam
      reiciendis velit veritatis eius error, est impedit! Totam omnis dolores, eos nesciunt expedita autem
      explicabo repellat quos dicta, debitis saepe pariatur aliquid tenetur veniam labore libero fugit
      accusamus laudantium, sint maxime placeat harum reiciendis unde. Non sequi quia eligendi nam
      dignissimos, sint perferendis, facere dicta nulla deleniti est corrupti voluptate nisi recusandae
      aperiam quod veritatis reprehenderit culpa velit? Recusandae, accusantium soluta cupiditate natus enim
      iure modi obcaecati quos. Laborum, accusamus odit.
    </template>
  </Card>
</template>
`

export const cardBasicReactCode = `
import { Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam facilis vel libero dolorem ab
      consequatur eaque quidem rem! Quisquam, nulla officia quod porro voluptatibus earum in quae numquam
      reiciendis velit veritatis eius error, est impedit! Totam omnis dolores, eos nesciunt expedita autem
      explicabo repellat quos dicta, debitis saepe pariatur aliquid tenetur veniam labore libero fugit
      accusamus laudantium, sint maxime placeat harum reiciendis unde. Non sequi quia eligendi nam
      dignissimos, sint perferendis, facere dicta nulla deleniti est corrupti voluptate nisi recusandae
      aperiam quod veritatis reprehenderit culpa velit? Recusandae, accusantium soluta cupiditate natus enim
      iure modi obcaecati quos. Laborum, accusamus odit.
    </Card>
  );
};

export default App;
`