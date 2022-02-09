<template>
    <div class="flex mb-4  mt-12">
        <div class="w-2/3 smallmobile:w-3/5 nice:w-1/2">
          <h2 class="mt-4 ml-2 nice:mt-4 font-bold">Navigation: </h2>
          <div class="text-f smallmobile:text-xs md:text-base flex mobile:ml-2 nice:ml-4 mobile:flex mt-4 nice:mt-8">
            <router-link class="ml-2 mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/">Home</router-link>
            <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/ProjectsSkills">Projects</router-link>
            <!-- <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/Blog">Blog</router-link> -->
            <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/Contact">Contact</router-link>
          </div>
        </div>
        <div class="w-1/3 smallmobile:w-2/5 nice:w-1/2 nice:justify-end nice:mt-4">
          <h2 class="mt-4 nice:mt-0 mr:4 font-bold">Follow me: </h2>
          <div class="flex-row mobile:flex mt-4 nice:mr-2 nice:mt-8 fa-lg">
            <i class="fab fa-facebook mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-github ml-2 mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-linkedin ml-2 mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-twitter ml-2 mobile:ml-4 nice:mr-16"></i>
          </div>
        </div>
        <VueBotUI
          :messages="data"
          :options="botOptions"
          :bot-typing="botValues.botTyping"
          @msg-send="messageSendHandler"
        />
    </div>
</template>

<script>
import { VueBotUI } from 'vue-bot-ui'

const { Configuration, OpenAIApi} = require('openai');
const config = new Configuration({
  organization: process.env.VUE_APP_ORGANISATION_API,
  apiKey: process.env.VUE_APP_API_KEY
});
const openai = new OpenAIApi(config);
export default {
  components: {
    VueBotUI,
  },
  data () {
    return {
      data: [
        {
          agent: 'bot',
          type: 'text',
          text: 'Hello! How can I help you?',
          disableInput: false,
        }
      ],
      botOptions: {
        botTitle: "QuestionBot (Made using GPT-3)",
        botAvatarImg: "https://img.itch.zone/aW1nLzc1NzQ4NjgucG5n/80x80%23/6%2BUgd1.png"
      },
      botValues: {
        botTyping: false,
      }
    }
  },
  methods: {
    messageSendHandler: async function (msg) {
      console.log(process.env.VUE_APP_ROOT_API)
      this.data.push({
        agent: 'user',
        type: 'text',
        text: msg.text,
      })
      setTimeout(() => {
        this.botValues.botTyping = true;
      }, 1000)
      //Do GPT Stuff and update data
      const new_line = await openai.createCompletion('text-davinci-001', {
        prompt: msg.text,
        max_tokens:64
      });
      this.botValues.botTyping = false;
      this.data.push({
        agent: 'bot',
        type: 'text',
        text: new_line.data.choices[0].text,
      })
      // setTimeout(() => {
      //   this.data.push({
      //     agent: 'bot',
      //     type: 'text',
      //     text: 'I can help you with that. What is your name?',
      //   })
      //   this.botValues.botTyping = false;
      // }, 1000);

    }
  }
}
</script>

<style>
.router-link-exact-active{
  @apply border-b-2;
  border-bottom: 3px solid red;
}
.qkb-msg-avatar{
  margin-top: 0.4rem;
}
</style>