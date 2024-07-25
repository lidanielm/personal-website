import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from './NavBar';
import './BlogPost.css';

function BlogPost() {
    const [post, setPost] = useState('');
    const { postId } = useParams<{ postId: string }>();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                `${process.env.PUBLIC_URL}/posts/${postId}.md`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            console.log(text);
            setPost(text);
        };

        fetchPost();
    }, [postId]);

    return (
        <div
            style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Header />
            <NavBar />
            <a href="/blog" className="back-link">
                <p>&larr;</p> Back to Blog
            </a>
            <ReactMarkdown>{post}</ReactMarkdown>
        </div>
    );
}

export default BlogPost;
