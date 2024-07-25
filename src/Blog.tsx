import React from 'react';
import Header from './Header';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
    { id: 'post-1', title: 'My First Post', date: '2024-01-01' },
    { id: 'post-2', title: 'Another Post' },
];

export default function Blog() {
    return (
        <div
            style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Header />
            <NavBar />
            <h2>Blog</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="blog-post">
                        <Link to={`/blog/${post.id}`} className="blog-link">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
