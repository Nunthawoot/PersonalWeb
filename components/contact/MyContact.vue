<template>
  <div class="min-h-screen grid content-center justify-items-center">
    <div class="text-4xl text-black2 font-semibold text-center mb-3 border-b-2 border-black2 pb-1">CONTACT ME</div>

    <div class="text-black2 w-2/3 text-center mb-8">
      Have a question or want to work together, my inbox is always open.<br />
      Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    </div>
    <div class="space-y-4 w-1/3 md:w-1/2">
      <input v-model="nameInput" placeholder="Name" class="focus:border-b-2 focus:border-orange" />
      <input v-model="emailInput" placeholder="Enter email" class="focus:border-b-2 focus:border-orange" />
      <textarea v-model="messageInput" placeholder="Your message" class="focus:border-b-2 focus:border-orange" />
      <div class="grid justify-end">
        <button
          class="bg-white2 text-black rounded-lg px-6 py-3 text-sm shadow-md font-semibold hover:bg-blue-500 hover:text-gold100 cursor-pointer"
          @click.prevent="onClickSendEmail"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameInput: '',
      emailInput: '',
      messageInput: ''
    }
  },
  methods: {
    async onClickSendEmail() {
      const dataValue = JSON.stringify({
        Messages: [
          {
            From: { Email: 'nunthawoot.saenchaiyaphum+portfolio@gmail.com', Name: 'Nunthawoot s.' },
            To: [{ Email: this.emailInput, Name: this.nameInput }],
            Subject: 'Test',
            TextPart: this.messageInput
          }
        ]
      })

      const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: dataValue,
        headers: { 'Content-Type': 'application/json' },
        auth: { username: process.env.MAILJET_API, password: process.env.MAILJET_SK }
      }

      await this.$axios.$post('https://api.mailjet.com/v3.1/send', config)

      //   return axios(config)
      //     .then(function (response) {
      //       console.log(JSON.stringify(response.data))
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })
    }
  }
}
</script>
<style lang="postcss" scoped>
input,
textarea {
  @apply p-3 bg-black2 rounded-lg w-full text-white2;
}
input,
textarea:focus {
  @apply outline-none;
}
</style>
