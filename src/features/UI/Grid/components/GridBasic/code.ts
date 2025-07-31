export const gridBasicVueCode = `
<script setup lang="ts">
import { Grid, Card } from '@/components/UI'
</script>

<template>
  <Grid :xs="2" :md="4" :lg="6" :span="8">
    <Card v-for="item in 24"></Card>
  </Grid>
</template>
`
export const gridBasicReactCode = `
import { Grid, Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <Grid xs={2} md={4} lg={6} span={8}>
      {[...Array(24)].map((_, idx) => (
        <Card key={idx} />
      ))}
    </Grid>
  );
};

export default App;
`