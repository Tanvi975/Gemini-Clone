import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import InputBox from './components/InputBox'

function App() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <ChatWindow />
      <div className="px-6 pb-6">
        <InputBox />
      </div>
    </div>
  )
}

export default App