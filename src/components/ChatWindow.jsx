import MessageBubble from './MessageBubble'
import TypingIndicator from "./TypingIndicator"
import { useChat } from '../context/ChatContext'
import { useEffect, useRef } from 'react'


function ChatWindow() {
  const { messages, loading } = useChat()
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}
      {loading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow