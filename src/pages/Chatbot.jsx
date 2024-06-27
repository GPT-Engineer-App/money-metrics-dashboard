import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingCart, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <nav className="w-full max-w-2xl mb-4">
        <ul className="flex justify-around bg-muted p-2 rounded-md">
          <li>
            <Link to="/" className="flex items-center gap-2 text-primary">
              <Home className="h-5 w-5" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center gap-2 text-muted-foreground">
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="ml-1">6</Badge>
            </Link>
          </li>
          <li>
            <Link to="/chatbot" className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="h-5 w-5" />
              Chatbot
            </Link>
          </li>
        </ul>
      </nav>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80 p-4 border rounded-md mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-md ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </ScrollArea>
          <div className="flex items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;