import { contactsList } from "./data.js";

const { createApp } = Vue

  createApp({
    data() {
      return {
        
        contacts: contactsList,
        activeChat : 0,
        contactFiltered : "",
        myMsg : ""
      }
    },
    methods : {
      lastMsg(contact){
        const last = contact.messages.slice(contact.messages.length - 1);
        return last[0].message;
      },
      lastHour(contact){
        const last = contact.messages.slice(contact.messages.length - 1);
        return last[0].date;
      },
      showChat(contact){
        const id = contact.id - 1;
        this.activeChat = id;
      }
    },
    computed : {

    },
    mounted() {
    }
  }).mount('#app')