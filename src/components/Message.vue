<template>
  <div v-show="message" class="notification is-success">
    <button @click="removeMessage" class="delete"></button>
    {{message}}
  </div>

</template>

<script>
  export default {
    name: 'message',
    computed: {
      message() {
        return this.$store.state.message
      },
    },
    methods: {
      removeMessage() {
        this.$store.commit('SET_MESSAGE', { message: null })
      },
    },
  }

</script>
