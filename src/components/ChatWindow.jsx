import MessageBubble from './MessageBubble'
import TypingIndicator from "./TypingIndicator"

function ChatWindow() {
  const dummyMessages = [
    { text: "Hi, how are you?", sender: "user" },
    { text: "I'm doing great! How can I help you today?", sender: "ai" },
  ]

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
      {dummyMessages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}
      <TypingIndicator />
    </div>
  )
}

export default ChatWindow