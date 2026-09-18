import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useChat } from '../context/ChatContext'

function Header() {
    const {model, setModel} = useChat()
    const [showDropdown, setShowDropdown] = useState(false)
  
    const models = ["Gemini Flash-Lite", "Gemini Flash", "Gemini Pro", "Extended Thinking"]
  
    return (
      <div className="flex items-center px-6 py-4 relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-1 text-xl text-gray-700"
        >
          {model}
          <MdOutlineKeyboardArrowDown size={18} />
        </button>
  
        {showDropdown && (
          <div className="absolute top-14 left-6 bg-white shadow-lg rounded-xl py-2 w-48">
            {models.map((m) => (
              <div
                key={m}
                onClick={() => {
                  setModel(m)
                  setShowDropdown(false)
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {m}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
  export default Header