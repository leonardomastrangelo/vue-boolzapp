import { contactsList } from "./data.js";

const { createApp } = Vue

  createApp({
    data() {
      return {
        
        contacts: contactsList,
        activeChat : 0,
        contactFiltered : ""
      }
    },
    methods : {
      lastMsg(contact){
        const last = contact.messages.slice(contact.messages.length - 1)
        return last[0].message
      },
      lastHour(contact){
        const last = contact.messages.slice(contact.messages.length - 1)
        return last[0].date
      },
    },
    computed : {

    },
    mounted() {
    }
  }).mount('#app')