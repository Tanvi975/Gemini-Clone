import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import InputBox from './components/InputBox'
import { useChat } from './context/ChatContext'

function App() {
  const { messages, theme } = useChat()
  const isEmpty = messages.length === 0
  const isDark = theme === "dark"
  return (
    <div
      className={
        isDark
          ? "flex flex-col h-screen bg-[#131314] bg-[radial-gradient(circle_at_50%_25%,rgba(90,110,220,0.35),transparent_60%)] text-gray-200"
          : "flex flex-col h-screen bg-[#f0f4f9] bg-[radial-gradient(circle_at_50%_25%,rgba(135,180,255,0.4),transparent_70%)] text-gray-900"
      }
    >
      <Header />
      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-10">
          <h1 className={`text-2xl md:text-4xl font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          What's on your mind, Tanvi?
    </h1>
        <InputBox />
      </div>
    ) : (
      <>
      <ChatWindow />
      <div className="px-6 pb-6">
        <InputBox />
      </div>
      </>
      )}
    </div>
  )
}

export default App