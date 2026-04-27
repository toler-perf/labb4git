import { Link } from 'react-router-dom';
import './Head.css';

export default function Head() {
    return (
        <header className="head">
            <nav className="head-nav">
                <Link to="/">Новости</Link>
                <Link to="/about">О проекте</Link>
                <Link to="/contacts">Контакты</Link>
            </nav>
        </header>
    );
}