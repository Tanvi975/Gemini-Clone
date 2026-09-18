import { useState } from 'react'
import { SendHorizontal } from 'lucide-react'
import { useChat } from '../context/ChatContext'

function InputBox() {
  const [text, setText] = useState("")
  const { messages, setMessages } = useChat()

  const handleSend = () => {
    if (text.trim() === "") return

    const newMessage = { text: text, sender: "user" }
    setMessages([...messages, newMessage])
    setText("")
  }

  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-2xl mx-auto">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSend()
      }}
      placeholder="Ask Gemini"
      className="flex-1 bg-transparent outline-none px-2"
    />
    <button onClick={handleSend} className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
    
    <SendHorizontal size={18} />
    </button>
    </div>
  )
}

export default InputBox