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

    },
    computed : {
        
    },
    mounted() {
      console.log(contacts)
    }
  }).mount('#app')