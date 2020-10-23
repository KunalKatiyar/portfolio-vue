<template>
  <div class="m-auto">
    <h1 class="ml-4 text-2xl font-bold mb-4">Contact Me!</h1>
    <div class="sm:flex justify-center">
      <div class="m-auto">
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="form-group">
              <label for="msg-name">Email</label>
              <input type="text" id="msg-name" class="form-control" name="email">
          </div>
          <div class="form-group">
              <label for="msg-email">Name</label>
              <input type="text" id="msg-email" class="form-control" name="name">
          </div>
          <div class="form-group">
              <label for="msg-message">Message</label>
              <textarea rows="10" id="msg-message" class="form-control" name="message"></textarea>
          </div>
          <div class="form-group">
              <button class="btn" type="submit">Send</button>
          </div>
        </form>
      </div>
      <div class="mx-auto sm:mt-32 mt-12 ml-8 sm:ml-0">
        <h1 class="mb-8 text-xl"><span class="border-2 border-gray-700 p-2 rounded-full">Contact Info:</span></h1>
        <h1 class="text-md"><span class="font-bold underline">Address:</span> C-110/4,</h1>
        <h1 class="text-md pl-16">R.D.S.O. Colony, Manak Nagar,</h1>
        <h1 class="text-md pl-16">Lucknow-226011</h1>
        <p class="text-md"></p>
        <h3 class="text-md"><span class="font-bold underline">Mobile:</span> 8840420828</h3>
        <h3 class="text-md"><span class="font-bold underline">Email:</span> katiyarkunal2011@gmail.com</h3>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_9bfSlBKuHqah4xAc6ZZzu");

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_9bfSlBKuHqah4xAc6ZZzu')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scoped>
.contact-form {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 290px;
    margin: 0 auto;
    
}
.form-group {
    padding: 10px;
}
.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=text].form-control {
    margin: 8px 0;
    display: inline-block;
}
textarea.form-control {
    resize: none;
}
.btn {
    cursor: pointer;
    padding: 8px 10px;
    outline: none;
    border: none;
    background: #3be249;
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
    text-align: center;
}
.alert {
    padding:0 10px;
}
.alert-success {
    color:#3be249;
}
.alert-error {
    color: #ff2121;
}
</style>