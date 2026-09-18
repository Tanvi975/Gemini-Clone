import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import InputBox from './components/InputBox'
import { useChat } from './context/ChatContext'

function App() {
  const { messages } = useChat()
  const isEmpty = messages.length === 0
  return (
    <div className="flex flex-col h-screen bg-[#131314] bg-[radial-gradient(circle_at_50%_25%,rgba(90,110,220,0.35),transparent_60%)] text-gray-200">
      <Header />
      {isEmpty ? (
        <div className="flex-1 flex items-center justify-center px-6">
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