<template>
  <div class="min-h-screen grid content-center justify-items-center">
    <div class="text-4xl text-black2 font-semibold text-center mb-3 border-b-2 border-black2 pb-1">CONTACT ME</div>

    <div :class="$device.isDesktop ? 'w-2/3 ' : 'w-full p-2'" class="text-black2 text-center mb-8">
      Have a question or want to work together, my inbox is always open.<br />
      Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    </div>
    <div v-if="sendEmailStatus" class="text-center text-black2">
      <p class="text-4xl font-semibold">Thank you</p>
      <p>for sending me some messages, I will get back to you as soon as possible.</p>
    </div>
    <form
      v-else
      ref="form"
      :class="$device.isDesktop ? 'w-1/3 md:w-1/2' : 'w-full p-2'"
      class="space-y-4"
      @submit.prevent="sendEmail"
    >
      <input v-model="nameInput" placeholder="Name" class="focus:border-b-2 focus:border-orange" />
      <input v-model="emailInput" placeholder="Enter email" class="focus:border-b-2 focus:border-orange" />
      <textarea v-model="messageInput" placeholder="Your message" class="focus:border-b-2 focus:border-orange" />
      <div :class="$device.isDesktop ? 'grid justify-end' : 'grid justify-center'">
        <button
          type="submit"
          class="bg-white2 text-black rounded-lg px-6 py-3 text-sm shadow-md font-semibold hover:bg-blue-500 hover:text-gold100 cursor-pointer"
        >
          SUBMIT
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  data() {
    return {
      nameInput: '',
      emailInput: '',
      messageInput: '',
      sendEmailStatus: false
    }
  },
  methods: {
    async sendEmail() {
      try {
        this.isLoading = true
        const data = {
          name: this.nameInput,
          email: this.emailInput,
          message: this.messageInput
        }
        const response = await emailjs.send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_KEY,
          data,
          process.env.EMAILJS_PUBLIC_KEY
        )
        if (response.status === 200 && response.text === 'OK') {
          this.sendEmailStatus = true
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
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
