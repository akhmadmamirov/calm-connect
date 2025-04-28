import { useState } from 'react';
import { BottomNav } from '@/components/navigation/BottomNav';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 🌟 How are you feeling today?' },
    { sender: 'user', text: "I'm feeling a bit anxious." },
    { sender: 'bot', text: "That's okay. Let's take a deep breath together. Inhale... Exhale..." },
    { sender: 'user', text: 'Thank you. That helps a little.' },
    { sender: 'bot', text: 'Anytime. Would you like to try a short mindfulness exercise?' },
  ]);

  const [input, setInput] = useState('');
  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: "I'm here with you. 🌿" }]);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-700">Calm-Connect 🤍</h1>
        <div className="flex-1 overflow-y-auto max-h-80 p-2 border rounded-md bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-lg max-w-xs ${msg.sender === 'bot' ? 'bg-blue-100 text-left' : 'bg-green-100 self-end text-right'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}