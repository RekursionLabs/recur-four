<script setup lang="ts">
const { data, send } = useWebSocket(`ws://${location.host}/gamesocket`)

const history = ref<string[]>([])

const message = ref('')

watch(data, (newValue) => {
  history.value.push(`server: ${newValue}`)
})

function sendData() {
  history.value.push(`client: ${message.value}`)
  send(message.value)
  message.value = ''
}
</script>

<template>
  <UCard :ui="{ header: 'p-0 sm:px-0' }">
    <template #header>
      <form @submit.prevent="sendData">
        <UButtonGroup>
          <UInput v-model="message" />
          <UButton type="submit">
            send
          </UButton>
        </UButtonGroup>
      </form>
    </template>
    <p v-for="entry, index in history" :key="index">
      {{ entry }}
    </p>
  </UCard>
</template>
