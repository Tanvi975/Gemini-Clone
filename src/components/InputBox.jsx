import { askGemini } from '../api'
import { useState } from 'react'
import { LuCircleArrowUp } from "react-icons/lu";
import { useChat } from '../context/ChatContext'
import { FaPlus, FaMicrophone } from "react-icons/fa"

function InputBox() {
  const [text, setText] = useState("")
  const { messages, setMessages , loading, setLoading, theme} = useChat()
  const isDark = theme === "dark"

  const handleSend = async () => {
    if (text.trim() === "") return
  
    const newMessage = { text: text, sender: "user" }
    setMessages([...messages, newMessage])
    setText("")
  
    setLoading(true)
    const aiReply = await askGemini(text)
    setLoading(false)
  
    const aiMessage = { text: aiReply, sender: "ai" }
    setMessages((prev) => [...prev, aiMessage])
  }

  return (
    <div className={`flex items-center rounded-full px-4 py-2 w-full max-w-2xl mx-auto ${isDark ? "bg-[#1e1f20]" : "bg-white border border-gray-300"}`}>
      <FaPlus className={isDark ? "text-gray-400" : "text-gray-500"} size={16} />
  
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend()
        }}
        placeholder="Ask Gemini"
        className={`flex-1 bg-transparent outline-none px-2 ${isDark ? "text-white placeholder-gray-400" : "text-gray-900 placeholder-gray-500"}`}
      />
  
      <button onClick={handleSend} className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${isDark ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
        <LuCircleArrowUp size={18} />
      </button>
  
      <FaMicrophone className={isDark ? "text-gray-400" : "text-gray-500"} size={16} />
    </div>
  )
}

export default InputBox