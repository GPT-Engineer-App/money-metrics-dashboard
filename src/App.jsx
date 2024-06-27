import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Login from "./pages/Login.jsx";
import Chatbot from "./pages/Chatbot.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Index />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;