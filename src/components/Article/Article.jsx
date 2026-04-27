import { Routes, Route } from 'react-router-dom';
import News from '../../pages/News';
import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import NotFound from '../../pages/NotFound';
import './Article.css';

export default function Article() {
    return (
        <div className="article">
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}