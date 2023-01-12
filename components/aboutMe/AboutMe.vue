<template>
  <div class="min-h-screen grid content-center container">
    <div class="text-6xl font-semibold mb-8 text-black">About Me</div>
    <div class="flex gap-8">
      <div class="space-y-8 text-black2">
        <!-- <p>
          Hello, my name is Nunthawoot(Toyo). with over 3 years of experience developing websites and building tools to
          help businesses grow. I am currently working as a front-end developer in real estate.
        </p> -->

        <p>
          Hi, I'm Nanthawut. I'm a front-end developer. It's very difficult for me to explain myself. This is my first
          website creation for myself. After I started working on web development from 2020, now I am working as a
          frontend developer. I like the job I'm doing right now. it gives me a headache But I'm happy I did.
        </p>

        <!-- <p>
          My main job is to develop a front-end for administrators to manage web data and develop features. to meet
          their needs. I have experience using Web3 to develop a cross-chain bridge.
        </p> -->

        <p>
          Right now I work with the tiny team at Creater.co from korat, Thailand.My main job is to develop tools for
          admins to manage web content and develop features for users.
        </p>

        <p>I spend my time reading, gaming, and traveling whenever I'm not working on projects or coding.</p>

        <p>
          Finally, I want to learn new things. Although sometimes I don't do very well, But I will try my best. I hope
          you like my website. Thank you.
        </p>
      </div>
      <div class="w-full grid justify-items-center">
        <CardAboutMe />
      </div>
    </div>
  </div>
</template>
<script>
import CardAboutMe from '~/components/aboutMe/CardAboutMe'
export default {
  components: {
    CardAboutMe
  }
}
</script>
