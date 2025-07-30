<script setup lang="ts">
import { Divider } from '@/components/UI'
import { dividerCatalogIds } from '@/features/UI/Divider/repository/catalogIds'
import { dividerContentReactCode, dividerContentVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="dividerCatalogIds.CONTENT">
    <ShowCase title="Content" code="" :vueCode="dividerContentVueCode" :reactCode="dividerContentReactCode">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dicta vitae deserunt rem mollitia,
        error eaque sed aperiam dolore inventore.
      </p>
      <Divider> Divider content </Divider>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nostrum nihil nesciunt sapiente numquam
        officiis neque possimus aspernatur deleniti doloremque quas mollitia dignissimos odit, vel voluptates
        sed doloribus tempora odio asperiores architecto, magnam soluta quasi. Dolor laboriosam, rem,
        provident, ad repellendus consectetur cumque magnam voluptas explicabo itaque et. Quasi, aut aliquam
        doloremque recusandae quo quos illo voluptas nisi omnis dolorem iste accusantium quidem nemo suscipit
        voluptatum labore aperiam placeat rem hic aliquid cum pariatur molestiae nihil esse. Porro expedita,
        eaque provident, nisi veritatis nam officia animi enim distinctio asperiores quod est eum, at omnis
        unde vel possimus a! Optio illo omnis architecto cum adipisci cupiditate esse debitis iste qui,
        perspiciatis minus numquam nostrum amet laudantium ab beatae. Atque corporis commodi eius culpa porro
        iure eaque velit accusantium quod repellat! Porro totam velit corrupti quo. Explicabo debitis nisi
        voluptates necessitatibus saepe quis, dolor magnam distinctio error atque ab harum quae suscipit?
        Dolore, expedita aperiam corporis laudantium illo, fugit iste consequuntur aliquid eaque, sequi vel?
        Maiores repudiandae cum ullam dolorem provident nemo quas, dignissimos fugiat nesciunt non aspernatur
        assumenda deserunt aut eaque illum incidunt sit voluptas illo eius necessitatibus vitae quis quidem.
        Ratione reiciendis pariatur vel, dicta nesciunt obcaecati eaque! Cupiditate, laboriosam?
      </p>
    </ShowCase>
  </AnchorContent>
</template>
