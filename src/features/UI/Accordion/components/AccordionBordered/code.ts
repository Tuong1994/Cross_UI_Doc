export const accordionBorderedVueCode = `
<script setup lang="ts">
import { Accordion } from '@/components/UI'
</script>

<template>
  <Accordion :bordered="false" rootClassName="section-space" label="Click to collapse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum minima, animi vero quae voluptatum
    repellat nihil ut asperiores aspernatur libero in vitae explicabo error saepe expedita illo maiores? Modi
    iusto architecto natus sapiente omnis, quos magnam neque voluptas expedita, ipsa voluptates nostrum autem,
    iste recusandae. Eveniet qui dolores accusantium mollitia ab, ipsum quidem fugit id reiciendis corporis
    sequi, minima quibusdam. Culpa, labore! Corrupti nobis error sunt tempora officia repudiandae dolor
    labore, odio eos, quibusdam harum veniam porro animi aut soluta voluptate similique unde dicta eius.
    Mollitia, voluptate, odit, accusantium consequatur repellendus cupiditate dolor hic libero quos vel ipsam
    quaerat!
  </Accordion>
  <Accordion label="Click to collapse">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ratione, iusto deserunt quibusdam odio
    expedita sint molestias asperiores quos! Similique voluptate necessitatibus voluptatem, distinctio
    blanditiis quae illo iusto temporibus sed accusamus iure eligendi quam adipisci est mollitia minus, totam
    laudantium culpa quas earum quisquam qui. Impedit autem nostrum laudantium qui blanditiis odio
    necessitatibus dolore iste voluptatum sequi harum quas veritatis beatae quis fugit labore voluptates quo,
    praesentium voluptatibus voluptas? Possimus ut temporibus, tempore iure incidunt maxime nihil cupiditate
    eveniet.
  </Accordion>
</template>
`

export const accordionBorderedReactCode = `
import { Accordion } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Accordion bordered={false} rootClassName="section-space" label="Click to collapse">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum minima, animi vero quae
        voluptatum repellat nihil ut asperiores aspernatur libero in vitae explicabo error saepe expedita illo
        maiores? Modi iusto architecto natus sapiente omnis, quos magnam neque voluptas expedita, ipsa
        voluptates nostrum autem, iste recusandae. Eveniet qui dolores accusantium mollitia ab, ipsum quidem
        fugit id reiciendis corporis sequi, minima quibusdam. Culpa, labore! Corrupti nobis error sunt tempora
        officia repudiandae dolor labore, odio eos, quibusdam harum veniam porro animi aut soluta voluptate
        similique unde dicta eius. Mollitia, voluptate, odit, accusantium consequatur repellendus cupiditate
        dolor hic libero quos vel ipsam quaerat!
      </Accordion>
      <Accordion label="Click to collapse">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ratione, iusto deserunt quibusdam odio
        expedita sint molestias asperiores quos! Similique voluptate necessitatibus voluptatem, distinctio
        blanditiis quae illo iusto temporibus sed accusamus iure eligendi quam adipisci est mollitia minus,
        totam laudantium culpa quas earum quisquam qui. Impedit autem nostrum laudantium qui blanditiis odio
        necessitatibus dolore iste voluptatum sequi harum quas veritatis beatae quis fugit labore voluptates
        quo, praesentium voluptatibus voluptas? Possimus ut temporibus, tempore iure incidunt maxime nihil
        cupiditate eveniet.
      </Accordion>
    </>
  );
};

export default App;
`