<script setup lang="ts">
import { Flex, Card, Typography } from '@/components/UI'
import { flexCatalogIds } from '@/features/UI/Flex/repository/catalogIds'
import { flexJustifyReactCode, flexJustifyVueCode } from './code'
import type { ComponentJustify } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const justifies: ComponentJustify[] = ['start', 'center', 'end', 'between', 'around', 'evenly']
</script>

<template>
  <AnchorContent :id="flexCatalogIds.JUSTIFY">
    <ShowCase title="Justify" :vueCode="flexJustifyVueCode" :reactCode="flexJustifyReactCode">
      <Card v-for="justify in justifies" :key="justify" rootClassName="section-space">
        <template #body>
          <Title :level="6">{{ justify }}</Title>
          <FlexRow :justify="justify">
            <FlexCol v-for="item in 3" :key="item" :span="6">
              <Card>
                <template #body>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
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
