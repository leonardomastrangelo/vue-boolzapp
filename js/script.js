import { contacts } from "./data";

const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: contacts,
        activeChat : 0
      }
    },
    methods : {

    },
    computed : {
        
    }
  }).mount('#app')