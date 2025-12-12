import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import { Button } from "./ui/button";

type Message = {
  type: "user" | "bot";
  text: string;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // loader pour la réponse
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const currentQuestion = question;
    setQuestion(""); // vider le textarea

    // Ajouter la question à l'historique
    setMessages((prev) => [...prev, { type: "user", text: currentQuestion }]);
    setLoading(true); // afficher loader

    try {
      const res = await fetch("http://localhost:8080/api/portfolio/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion }),
      });
      const data = await res.json();

      // Ajouter la réponse du bot
      setMessages((prev) => [...prev, { type: "bot", text: data.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { type: "bot", text: "Erreur serveur. Veuillez essayer ultérieurement." }]);
    } finally {
      setLoading(false); // masquer loader
    }
  };

  // Scroll automatique
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <>
      {/* Chatbot Icon */}
      <div
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bg-pink-500 hover:bg-pink-400 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <FaRobot size={24} />
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-100 rounded-lg shadow-lg p-4 glass bg-gray-800 flex flex-col">
          <h3 className="text-lg text-white font-bold mb-3">🤖 Chat avec Bot</h3>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-2 space-y-3 max-h-96">
            {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} m-2`}
            >
              {msg.type === "user" && (
                <div className="flex items-start max-w-xs">
                  <div className="bg-blue-400 text-white p-2 rounded-lg rounded-tr-none break-words">
                    {msg.text}
                  </div>
                  <FaUser size={20} className="text-blue-400 ml-2 mt-1 flex-shrink-0" />
                </div>
              )}

              {msg.type === "bot" && (
                <div className="flex items-start max-w-xs">
                  <FaRobot size={20} className="text-pink-400 mr-2 mt-1 flex-shrink-0" />
                  <div className="bg-gray-500 text-white p-2 rounded-lg rounded-tl-none break-words">
                    {msg.text}
                  </div>
                </div>
              )}
            </div>

            ))}

            {/* Loader pendant la génération */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center max-w-xs">
                  <FaRobot size={20} className="text-pink-400 mr-2" />
                  <div className="bg-gray-700 text-white p-2 rounded-lg rounded-tl-none flex items-center space-x-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input avec icône send */}
          <div className="flex items-center gap-2">
            <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Pose une question à propos de mon parcours"
            className="w-full p-2 rounded-md border bg-gray-700 text-white border-gray-500 resize-none mb-2"
            rows={2}
            />
            <button
              onClick={handleAsk}
              className="bg-pink-500 hover:bg-pink-400 text-white p-3 rounded-md flex items-center justify-center"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
