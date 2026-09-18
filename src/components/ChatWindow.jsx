import MessageBubble from './MessageBubble'
import TypingIndicator from "./TypingIndicator"
import { useChat } from '../context/ChatContext'


function ChatWindow() {
  const { messages, loading } = useChat()

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}
      {loading && <TypingIndicator />}
    </div>
  )
}

export default ChatWindow