import Section from '../Section/Section';
import Article from '../Article/Article';
import Aside from '../Aside/Aside';
import './Main.css';

export default function Main() {
    return (
        <main className="main-grid">
            <Section />
            <Article />
            <Aside />
        </main>
    );
}