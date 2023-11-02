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
      },
      pushMsg(){
        const newMsg = 
        {
          date : this.time(),
          message : this.myMsg,
          status : "sent"
        }
        if (this.myMsg !== "") {   
          this.contacts[this.activeChat].messages.push(newMsg)
          this.myMsg = ""
        }
      },
      time(){
        const now = new Date()
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const h_m = `${day}/${month}/${year} ${hours}:${minutes}`
        return h_m
      }
    },
    mounted() {
    }
  }).mount('#app')