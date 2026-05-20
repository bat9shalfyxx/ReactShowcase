import { type FC, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router';

import './styles/style.scss';
import Loader from './components/common/Loader/Loader';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

const LazyHomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const LazyInfiniteScrollPage = lazy(() => import('./components/pages/InfiniteScrollPage/InfiniteScrollPage'));
const LazyNotFoundPage = lazy(() => import('./components/pages/NotFoundPage/NotFoundPage'));
const LazyTodoPage = lazy(() => import('./components/pages/TodoPage/TodoPage'));

const App: FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <Header />

                <Suspense fallback={<Loader size="large" />}>
                    <Routes>
                        <Route path="/" element={<LazyHomePage />} />
                        <Route path="/*" element={<LazyNotFoundPage />} />
                        <Route path="/todo" element={<LazyTodoPage />} />
                        <Route path="/infinite-scroll" element={<LazyInfiniteScrollPage />} />
                    </Routes>
                </Suspense>

                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
