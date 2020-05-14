<template>
  <div class="section-chat">
    <div class="container">
      <div class="chats-wrp">
        <div class="chat-wrp chat-wrp1">
          <div class="ttl">Чат с пользователем</div>
          <div class="card-chat-wrp">
            <div class="card-chat">
              <div class="chat-card-header">
                <div class="card-img-wrp">
                  <img src="@/assets/chat/user.png" alt="user" />
                </div>
                <div class="card-title-name">
                  <span class="name">Наталья Полянская</span>
                  <span class="descr">Гид по Баварии, фотограф</span>
                </div>
                <div class="card-star-wrp">
                  <ul>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <perfect-scrollbar class="scroll-area"  :settings="settings" >
              <ul class="list-group messages-list list-group-flush">
                <!-- <small v-if="typing" class="text-white">{{typing}} is typing</small> -->
                <li
                  class="list-group-item"
                  v-for="(message,ind) in messages"
                  :key="ind"
                  v-bind:class="[!message.isActive ? message.isActive : 'activeItem', '']"
                >
                  <div class="img-user-wrp">
                    <img :src="require(`../assets/chat/${message.user}.png`)" alt="user" />
                  </div>
                  <div class="text-wrp">
                    <span class="text-mess">{{ message.message }}</span>
                    <span class="date-mess">Сегодня в {{message.timeNow}}</span>
                  </div>
                </li>
              </ul>
              </perfect-scrollbar>
              <div class="card-body">
                <div class="img-user-wrap">
                  <img src="@/assets/chat/user.png" alt="user" />
                </div>
                <form @submit.prevent="send">
                  <div class="form-send-mess">
                    <input
                      type="text"
                      class="input-send"
                      v-model="newMessage1"
                      placeholder="Напишите сообщение..."
                    />
                    <button type="submit" class="btn-submit"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-wrp chat-wrp2">
          <div class="ttl">Чат с администратором</div>
          <div class="card-chat-wrp">
            <div class="card-chat">
              <div class="chat-card-header">
                <div class="card-img-wrp">
                  <img src="@/assets/chat/admin.png" alt="user" />
                </div>
                <div class="card-title-name">
                  <span class="name">Администратор</span>
                  <span class="descr">TravelAsk</span>
                </div>
                <div class="card-star-wrp">
                </div>
              </div>
              <perfect-scrollbar class="scroll-area"  :settings="settings" >
              <ul class="list-group messages-list list-group-flush">
                <li
                  class="list-group-item"
                  v-for="(message,ind) in messages"
                  :key="ind"
                  v-bind:class="[!message.isActive ? message.isActive : 'activeItem', '']"   >
                  <div class="img-user-wrp">
                    <img :src="require(`../assets/chat/${message.user}.png`)" alt="user" />
                  </div>
                  <div class="text-wrp">
                    <span class="text-mess">{{ message.message }}</span>
                    <span class="date-mess">Сегодня в  {{message.timeNow}}</span>
                  </div>
                </li>
              </ul>
              </perfect-scrollbar>
              <div class="card-body">
                <div class="img-user-wrap">
                  <img src="@/assets/chat/admin.png" alt="user" />
                </div>
                <form @submit.prevent="sendAdmin">
                  <div class="form-send-mess">
                    <input
                      type="text"
                      class="input-send"
                      v-model="newMessage2"
                      placeholder="Напишите сообщение..."
                    />
                    <button type="submit" class="btn-submit"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import io from "socket.io-client";
export default {
  name: "AppChat",
  data() {
    return {
      newMessage1: null,
      newMessage2: null,
      messagesAdmin: [],
      username: 'user',
      usernameAdmin: 'admin',
      isActive: false,
      timeNow: '',
      user: "",
      typing: false,
      message: "",
      messages: [],
      socket: io("http://localhost:3001"),
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  methods: {
    
    send() {
      this.messages.push({
        message: this.newMessage1,
        type: 0,
        user: this.username,
        isActive: !this.isActive,
        timeNow: new Date().getHours()+':'+ new Date().getMinutes(),
      });

      this.socket.emit("SEND_MESSAGE", {
        message: this.newMessage2,
        user: this.usernameAdmin,
        isActive: !this.isActive,
        timeNow: new Date().getHours()+':'+ new Date().getMinutes(),
      });
      this.newMessage1 = null;
    },
    sendAdmin() {
      this.messages.push({
        message: this.newMessage2,
        type: 1,
        user: this.usernameAdmin,
        isActive: this.isActive,
        timeNow: new Date().getHours()+':'+ new Date().getMinutes(),
      });

      this.socket.emit("SEND_MESSAGE", {
        message: this.newMessage1,
        user: this.username,
        isActive: this.isActive,
        timeNow: new Date().getHours()+':'+ new Date().getMinutes(),
      });
      this.newMessage2 = null;
    }
  },
  
};
</script>
<style scoped lang="sass">
@import '../assets/scss/chat'
</style>
