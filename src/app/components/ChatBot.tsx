"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ q: string; a: string | null }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const [thinking, setThinking] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessage, thinking]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const question = input;
    setMessages((prev) => [...prev, { q: question, a: null }]);
    setInput("");
    setIsTyping(false);
    setTypingMessage("");
    setThinking(true); // 👈 Show "thinking..." immediately

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    const botAnswer = data.answer || "Sorry, no answer found.";

    setThinking(false); // 👈 Stop showing "thinking..."
    setIsTyping(true);
    let i = 0;
    setTypingMessage("");

    const typingInterval = setInterval(() => {
      setTypingMessage((prev) => prev + botAnswer[i]);
      i++;
      if (i === botAnswer.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTypingMessage("");
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { q: question, a: botAnswer },
        ]);
      }
    }, 30);
  };

  return (
    <div>
      {/* Floating Button */}
      <div
        className="fixed bottom-24 right-2 flex items-center space-x-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm animate-pulse hidden md:block">
          Text me
        </div>
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          💬
        </div>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-[140px] right-12 w-80 bg-white border border-gray-300 rounded-lg shadow-xl p-4 flex flex-col z-50">
          <div className="h-64 overflow-y-auto mb-2">
            {messages.map((m, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold text-blue-600">You:</p>
                <p className="mb-1">{m.q}</p>
                <p className="font-semibold text-gray-600">CoderMat:</p>
                <p>{m.a}</p>
              </div>
            ))}

            {/* Show this while waiting for API response */}
            {thinking && (
              <div className="text-gray-500 italic">
                CoderMat is thinking...
              </div>
            )}

            {/* Show this when typing */}
            {isTyping && !thinking && (
              <div className="text-gray-500 italic">{typingMessage}</div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border border-gray-300 rounded-l px-2 py-1"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded-r"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
