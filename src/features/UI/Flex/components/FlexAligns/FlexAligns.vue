<script setup lang="ts">
import { Flex, Card, Typography } from '@/components/UI'
import { flexCatalogIds } from '@/features/UI/Flex/repository/catalogIds'
import { flexAlignsReactCode, flexAlignsVueCode } from './code'
import type { ComponentAligns } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const aligns: ComponentAligns[] = ['top', 'middle', 'bottom', 'baseline']
</script>

<template>
  <AnchorContent :id="flexCatalogIds.ALIGNS">
    <ShowCase title="Aligns" :vueCode="flexAlignsVueCode" :reactCode="flexAlignsReactCode">
      <Card v-for="align in aligns" :key="align" rootClassName="section-space">
        <template #body>
          <Title :level="6">{{ align }}</Title>
          <FlexRow :aligns="align">
            <FlexCol :span="8">
              <Card>
                <template #body>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
                  </Paragraph>
                </template>
              </Card>
            </FlexCol>
            <FlexCol :span="8">
              <Card>
                <template #body>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque assumenda blanditiis
                    architecto ab quis quaerat maiores, deleniti culpa repudiandae voluptas!
                  </Paragraph>
                </template>
              </Card>
            </FlexCol>
            <FlexCol :span="8">
              <Card>
                <template #body>
                  <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus mollitia id
                    voluptatibus impedit nesciunt esse. Fugiat necessitatibus quaerat, excepturi magnam, quasi
                    commodi, rerum modi ipsam neque omnis fugit nulla?
                  </Paragraph>
                </template>
              </Card>
            </FlexCol>
          </FlexRow>
        </template>
      </Card>
    </ShowCase>
  </AnchorContent>
</template>
