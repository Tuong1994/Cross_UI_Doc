export const flexBasicCode = `
<script setup lang="ts">
import { Flex, Card, Typography } from '@/components/UI'

const { Paragraph } = Typography

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <FlexRow>
    <FlexCol :span="12">
      <Card>
        <template #body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis delectus dolor deserunt placeat
            recusandae doloremque tempora sit laborum inventore nemo repudiandae officiis, modi sint id vero
            veniam quae molestias ullam. Illum, fugit dicta ipsam nam ducimus officiis debitis at tenetur
            saepe minima sint eaque eveniet voluptatum mollitia pariatur culpa iste voluptate sunt maiores ex
            reprehenderit expedita! Vel modi aut iste fuga libero expedita, earum amet, quas reprehenderit
            sapiente eum eaque ea ratione, veniam necessitatibus. In ipsum ea sit magni? Harum ipsum dolores
            totam minima quam autem odio. Ullam a nesciunt sint placeat quia reprehenderit ratione, eius
            laudantium, excepturi porro illo?
          </Paragraph>
        </template>
      </Card>
    </FlexCol>
    <FlexCol :span="12">
      <Card>
        <template #body>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur recusandae officia quia
            magnam ea voluptates quod debitis architecto fugit laboriosam amet deleniti sequi libero,
            repellendus placeat rem sapiente perspiciatis molestias aspernatur? Rerum, suscipit cumque fugiat
            et incidunt corporis consectetur eligendi vel eius facilis ab soluta sequi eum in praesentium odio
            placeat quos, excepturi dolor. Corporis voluptate quam expedita ea? Vitae, dolor corporis tenetur
            dolorum maiores quam provident iusto quo, voluptas quae rem ea corrupti id voluptatibus nemo illo
            ratione deleniti deserunt hic nesciunt reiciendis veritatis ut? Natus deleniti saepe sapiente
            alias minus, reprehenderit repellat earum amet nemo rem itaque architecto nesciunt, rerum pariatur
            doloribus, eveniet qui. Veniam exercitationem minima ea architecto, unde laborum iure sequi totam
            mollitia natus ab velit quos odio nam debitis cum ullam recusandae hic! Suscipit fugiat nesciunt
            aperiam? Repellat, ex! Quae nulla qui autem fuga quisquam vitae eveniet, maxime maiores facere,
            corrupti distinctio minus id?
          </Paragraph>
        </template>
      </Card>
    </FlexCol>
  </FlexRow>
</template>
`
