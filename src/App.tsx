import { type FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import './styles/style.scss';
import Home from './components/pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Todo from './components/pages/TodoPage/TodoPage';

const App: FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>

                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
