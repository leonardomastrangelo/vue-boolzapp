import { contactsList } from "./data.js";
import { msgRnd } from "./data.js";

const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts: contactsList,
      activeChat: 0,
      contactFiltered: "",
      myMsg: "",
      responses: msgRnd,
      newName: "",
      splash : true,
      seconds : 5,
      lastId: ""
    };
  },
  methods: {
    splashInteraction(){
      this.splash = false
    },
    lastMsg(contact) {
      let lastMsg = contact.messages.slice(contact.messages.length - 1,);
      if (lastMsg.length !== 0) {
        return lastMsg[0].message;
      } else {
        return lastMsg = ""
      }
    },
    lastHour(contact) {
      let lastH = contact.messages.slice(contact.messages.length - 1);
      if (lastH.length !== 0) {
        return lastH[0].date;
      } else {
        return lastH = "c'era una volta"
      }
    },
    showChat(contact) {
      this.activeChat = contact.id - 1;
    },
    pushMsg() {
      const newMsg = {
        date: this.time,
        message: this.myMsg,
        status: "sent",
      };
      if (this.myMsg.trim() !== "") {
        this.contacts[this.activeChat].messages.push(newMsg);
        //? va sul penultimo
        let lastMsg = this.$refs.prova[this.$refs.prova.length - 1]
        lastMsg.scrollIntoView({ behavior: "smooth", block: "end"})
      }
    },
    pushResponse() {
      if (this.myMsg.trim() !== "") {
        // clear response
        this.myMsg = "";
        // response object
        const newResponse = {
          date: this.time,
          message:
            this.responses[getRndInteger(0, this.responses.length - 1)],
          status: "received",
        };
        const one = setTimeout(()=>{
          // push response
          this.contacts[this.activeChat].messages.push(newResponse)
          //? va sul penultimo
          let lastMsg = this.$refs.prova[this.$refs.prova.length - 1]
          lastMsg.scrollIntoView({ behavior: "smooth", block: "end"})
        },2000)
        // rnd integer
        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        }
    },
    deleteMsg(msg,index){
      return this.contacts[this.activeChat].messages.splice(index, 1)
    },
    deleteAllMsg(){
      this.contacts[this.activeChat].messages = []
    },
    deleteChat(){
      this.contacts.splice(this.activeChat,1);
    },
    newChat(){
      this.lastId = this.lastIdCalculator + 1
      const newConvo = {
        id: this.lastId,
        name: this.newName,
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
        ],
      }
      if (this.newName.trim() !== "") {
        this.contacts.push(newConvo)
        this.activeChat = newConvo.id - 1
      }
      this.newName = ""
    },
    
    // autoScroll(){
    //   let lastMsg = this.$refs.prova[this.$refs.prova.length - 1]
    //   lastMsg.scrollIntoView({ behavior: "smooth", block: "end"})
    //   console.log(this.$refs.prova[this.$refs.prova.length - 1]);
    // }
  },
  mounted() {
    setInterval(()=> {
      if (this.seconds !== 0) {
        return this.seconds--
      } else {
        this.splash = false
        clearInterval()
      }
    },1000)
  },
  computed: {
    time() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const h_m = `${day}/${month}/${year} ${hours}:${minutes}`;
      return h_m;
    },
    filteringContact() {
      if (this.contactFiltered === "") {
        return this.contacts;
      } else {
        return this.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.contactFiltered)
        );
      }
    },
    lastIdCalculator(){
      return this.lastId = this.contacts[this.contacts.length - 1].id
    },
    
  },
}).mount("#app");
