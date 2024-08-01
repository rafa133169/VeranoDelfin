import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./PAGES/Main";
import Chatbot from "./PAGES/Chatbot";
import Analytics from "./PAGES/Analytics";
import './index.css';



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="analytics" element={<Analytics />} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;