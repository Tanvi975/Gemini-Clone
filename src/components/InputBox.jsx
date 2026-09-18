import { useState } from 'react'
import { SendHorizontal } from 'lucide-react'

function InputBox() {
  const [text, setText] = useState("")

  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-2xl mx-auto">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Ask Gemini"
      className="flex-1 bg-transparent outline-none px-2"
    />
    <button className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
    <SendHorizontal size={18} />
    </button>
    </div>
  )
}

export default InputBox