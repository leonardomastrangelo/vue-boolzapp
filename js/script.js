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
    };
  },
  methods: {
    lastMsg(contact) {
      const last = contact.messages.slice(contact.messages.length - 1);
      return last[0].message;
    },
    lastHour(contact) {
      const last = contact.messages.slice(contact.messages.length - 1);
      return last[0].date;
    },
    showChat(contact) {
      const id = contact.id - 1;
      this.activeChat = id;
    },
    pushMsg() {
      const newMsg = {
        date: this.time,
        message: this.myMsg,
        status: "sent",
      };
      if (this.myMsg !== "") {
        this.contacts[this.activeChat].messages.push(newMsg);
      }
    },
    pushResponse() {
      if (this.myMsg !== "") {
        // clear response
        this.myMsg = "";
        const timer = setTimeout(() => {
          // response object
          const newResponse = {
            date: this.time,
            message:
              this.responses[getRndInteger(0, this.responses.length - 1)],
            status: "received",
          };
          // push response
          this.contacts[this.activeChat].messages.push(newResponse);
          function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        }, 1500);
      }
    },
  },
  mounted() {},
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
  },
}).mount("#app");
