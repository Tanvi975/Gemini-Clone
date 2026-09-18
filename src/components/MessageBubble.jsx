function MessageBubble({ text, sender }) {

        const isUser = sender === "user"
      
        return (
          <div className={isUser ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                isUser
                  ? "bg-gray-200 text-black rounded-2xl px-4 py-2 max-w-lg"
                  : "text-black max-w-2xl"
              }
            >
              {text}
            </div>
          </div>
        )
     

}

export default MessageBubble