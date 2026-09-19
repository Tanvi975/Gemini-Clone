import { askGemini } from '../api'
import { useState, useRef } from 'react'
import { LuCircleArrowUp } from "react-icons/lu";
import { useChat } from '../context/ChatContext'
import { FaPlus, FaMicrophone, FaTimes } from "react-icons/fa"

function InputBox() {
  const [text, setText] = useState("")
  const { messages, setMessages , loading, setLoading, theme} = useChat()
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null)
  const isDark = theme === "dark"

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
  
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1]
      setImage({ base64, mimeType: file.type, name: file.name, preview: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const handleSend = async () => {
    if (text.trim() === "" && !image) return
  
    const newMessage = { text: text, sender: "user", imagePreview: image?.preview }
    setMessages([...messages, newMessage])
  
    const sentImage = image
    setText("")
    setImage(null)
  
    setLoading(true)
    const aiReply = await askGemini(text, sentImage?.base64, sentImage?.mimeType)
    setLoading(false)
  
    const aiMessage = { text: aiReply, sender: "ai" }
    setMessages((prev) => [...prev, aiMessage])
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
       {image && (
        <div className={`flex items-center gap-2 mb-2 px-3 py-1 rounded-full w-fit mx-auto ${isDark ? "bg-[#1e1f20] text-gray-200" : "bg-gray-100 text-gray-700"}`}>
          <span className="text-sm">{image.name}</span>
          <button onClick={() => setImage(null)}>
            <FaTimes size={12} />
          </button>
        </div>
      )}
    <div className={`flex items-center rounded-full px-4 py-2 w-full max-w-2xl mx-auto ${isDark ? "bg-[#1e1f20]" : "bg-white border border-gray-300"}`}>
    <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} className="hidden" />

    <button onClick={() => fileInputRef.current.click()}>
    <FaPlus className={isDark ? "text-gray-400" : "text-gray-500"} size={16} />
    </button>
  
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
    </div>
  )
}

export default InputBox