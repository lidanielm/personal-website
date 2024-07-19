import './App.css';
import Home from './Home';
import Blog from './Blog';
import Projects from './Projects';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Navigator, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}