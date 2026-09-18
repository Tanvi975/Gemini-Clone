import { createContext, useState, useContext } from 'react'
const ChatContext = createContext()

export function ChatProvider({ children }){
  const [messages, setMessages] = useState([])
  const [model, setModel] = useState("gemini-flash")
  const [loading, setLoading] = useState(false)


   return (
    <ChatContext.Provider value={{ messages, setMessages, model, setModel, loading, setLoading }}>
      {children}
    </ChatContext.Provider>
  )
}
  export function useChat() {
  return useContext(ChatContext)
}