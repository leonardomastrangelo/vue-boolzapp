import { contacts } from "./data.js";

const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: contacts,
        activeChat : 0,
        contactFiltered : ""
      }
    },
    methods : {

    },
    computed : {
        
    }
  }).mount('#app')