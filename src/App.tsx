import './App.css';
import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';
import NavBar from './components/NavBar';
import BlogPost from './components/BlogPost';
import {
    BrowserRouter as Router,
    Route,
    Navigator,
    Routes,
} from 'react-router-dom';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postId" element={<BlogPost />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </Router>
        </>
    );
}
