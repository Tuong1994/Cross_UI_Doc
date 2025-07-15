<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Select } from '@/components/Control'
import type { SelectOptions } from '@/components/Control/type'

type ApiUser = {
  id: string
  name: string
}

const options = ref<SelectOptions>([])

const currentPage = ref<number>(1)

const total = ref<number>(100)

const getUsers = () => {
  fetch(`https://64118d436a69ae754520943a.mockapi.io/api/dashboard/user?page=${currentPage.value}&limit=10`)
    .then((response) => {
      const totalUsers = response.headers.get('X-Total-Count')
      console.log(response)
      if (totalUsers && totalUsers !== null) total.value = Number(totalUsers)
      return response.json()
    })
    .then((users: ApiUser[]) => {
      options.value = users.map((user) => ({ label: user.name, value: Number(user.id) }))
    })
    .catch((err) => console.log(err))
}

onMounted(() => getUsers())
</script>

<template>
  <Select async color="green" :options="options" :total="total" :limit="10" />
</template>
