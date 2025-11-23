import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "pages/ContactPage";
import BlogPage from "pages/BlogPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<BlogPage />} />
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
