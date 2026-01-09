import type { FC } from "react";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import "./styles/style.scss";
import Home from "./components/pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/pages/Todo/Todo";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
