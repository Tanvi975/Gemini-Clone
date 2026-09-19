import ReactMarkdown from 'react-markdown'
import { useChat } from '../context/ChatContext'
function MessageBubble({ text, sender, imagePreview }) {

        const isUser = sender === "user"
        const { theme } = useChat()
        const isDark = theme === "dark"
      
        return (
          <div className={isUser ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                isUser
                  ? `rounded-2xl px-4 py-2 max-w-lg ${isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"}`
                  : `max-w-2xl prose ${isDark ? "prose-invert text-white" : "text-gray-900"}`
              }
            >
              {imagePreview && <img src={imagePreview} alt="uploaded" className="max-w-xs rounded-lg mb-2" />}
              {isUser ? text : <ReactMarkdown>{text}</ReactMarkdown>}
            </div>
          </div>
        )
     

}

export default MessageBubble