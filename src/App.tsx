import { type FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router';

import './styles/style.scss';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/pages/HomePage/HomePage';
import InfiniteScrollPage from './components/pages/InfiniteScrollPage/InfiniteScrollPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Todo from './components/pages/TodoPage/TodoPage';

const App: FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
                </Routes>

                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
