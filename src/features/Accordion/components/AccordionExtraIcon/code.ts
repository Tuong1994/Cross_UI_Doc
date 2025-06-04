export const accordionExtraIconCode = `
<script setup lang="ts">
import { Accordion } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
</script>

<template>
   <Accordion rootClassName="section-space" label="Click to collapse" :extraIcon="iconName.BOOKMARK">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate assumenda maxime odit eveniet
    porro cupiditate ullam deleniti non consequatur.
  </Accordion>
  <Accordion rootClassName="section-space" label="Click to collapse" :extraIcon="iconName.BELL">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo libero nostrum dolorum unde iste,
    quis quae doloribus sit cumque eligendi, dignissimos eveniet excepturi numquam consectetur quo quibusdam
    corporis voluptatibus nulla perferendis eius architecto quam omnis? Earum hic explicabo voluptates, nihil
    laboriosam voluptatem accusamus accusantium. Esse, nam. Voluptatem tempora laborum magni quo rem a sint
    omnis et labore neque ipsum dicta quod, in nam voluptatibus maiores quam provident, amet aliquid commodi
    ipsa esse! Iure itaque, ducimus temporibus ad sint cumque, at labore nemo minima saepe dolores mollitia!
    Ipsam aut accusamus, consequuntur porro iusto magni officiis non autem vel exercitationem facilis.
  </Accordion>
  <Accordion label="Click to collapse" :extraIcon="iconName.BOX_ARCHIVE">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam quas, provident, eaque non atque fuga
    quia aliquid voluptatibus magni sapiente omnis odio. Inventore eius, error repellat at velit nihil ab
    voluptas necessitatibus doloribus natus, porro modi eaque veniam. Sapiente libero similique, aut qui in
    pariatur tenetur dolorem. Ullam cupiditate quas consequuntur recusandae adipisci. Perspiciatis consectetur
    cupiditate doloribus expedita ut id. Eaque, placeat. Quis exercitationem odit nostrum assumenda, hic
    quidem?
  </Accordion>
</template>
`
