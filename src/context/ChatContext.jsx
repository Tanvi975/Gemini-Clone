import { createContext, useState, useContext } from 'react'
const ChatContext = createContext()

export function ChatProvider({ children }){
  const [messages, setMessages] = useState([])
  const [model, setModel] = useState("gemini-flash")
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState("dark")


   return (
    <ChatContext.Provider value={{ messages, setMessages, model, setModel, loading, setLoading, theme, setTheme }}>
      {children}
    </ChatContext.Provider>
  )
}
  export function useChat() {
  return useContext(ChatContext)
}