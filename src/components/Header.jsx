import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useChat } from '../context/ChatContext'
import { MdLightMode, MdDarkMode } from "react-icons/md";

function Header() {
    const {model, setModel, theme, setTheme} = useChat()
    const [showDropdown, setShowDropdown] = useState(false)
    const isDark = theme === "dark"
  
    const models = ["Gemini Flash-Lite", "Gemini Flash", "Gemini Pro", "Extended Thinking"]
    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  
    return (
      <div className="flex items-center justify-between px-6 py-4 relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={`flex items-center gap-1 text-xl ${isDark ? "text-gray-200" : "text-gray-800"}`}
        >
          {model}
          <MdOutlineKeyboardArrowDown size={18} />
        </button>

        <button onClick={toggleTheme} className={`text-2xl ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
  
        {showDropdown && (
          <div className={`absolute top-14 left-6 shadow-lg rounded-xl py-2 w-48 ${isDark ? "bg-[#1e1f20]" : "bg-white border border-gray-200"}`}>
            {models.map((m) => (
              <div
                key={m}
                onClick={() => {
                  setModel(m)
                  setShowDropdown(false)
                }}
                className={`px-4 py-2 cursor-pointer ${isDark ? "hover:bg-gray-700 text-gray-200" : "hover:bg-gray-100 text-gray-800"}`}
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