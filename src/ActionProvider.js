class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  helloWorldHandler = () => {
      const message = this.createChatBotMessage("Hello There!! \u{1F44B}")
      this.setChatbotMessage(message)

       const message1 = this.createChatBotMessage("We create websites and offer tutorship on web design, game design, machine learning and data science and we teach you all you need know about robots. To know more about EA Technologies services, please check the Home page from the Navigation Bar or the Footer!")
      this.setChatbotMessage(message1)
  }

  setChatbotMessage = (message) => {
      this.setState(state => ({...state, messages:[...state.messages, message]}))
  }
}

export default ActionProvider;