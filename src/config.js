import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from './components/BotAvatar/BotAvatar';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to EA Technologies!! TECH INNOVATION FROM AFRICA!`)],
  botName:"EABot",
  customComponents:{
      botAvatar:(props)=> <BotAvatar {...props}/>
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "skyblue",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "skyblue",
    },
  },
  state:{
      movieTitles:["The lord of the rings", "Con Air"]
  }
}

export default config