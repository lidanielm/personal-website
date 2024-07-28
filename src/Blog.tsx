import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import './Blog.css';

const topics = ['All', 'CS', 'Misc'];

const posts = [
    { id: 'post-1', title: 'My First Post', date: '2024-01-01', topic: 'Misc' },
    { id: 'post-2', title: 'Another Post', date: '2024-01-02', topic: 'CS' },
];

export default function Blog() {
    const [selectedTopic, setSelectedTopic] = React.useState('All');
    const [filteredPosts, setFilteredPosts] = React.useState(posts);

    var topicButtons = (
        <div style={{ marginBottom: '20px' }}>
            {topics.map((topic) => (
                <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    style={{
                        color: topic === selectedTopic ? 'white' : 'black',
                        backgroundColor:
                            topic === selectedTopic ? '#0e58a1' : '#d9d9d9',
                        transition: 'all ease 0.2s',
                    }}
                    onMouseEnter={(event) => {
                        const button = event.target as HTMLButtonElement;
                        if (topic === selectedTopic) {
                            button.style.backgroundColor = '#3d87d1';
                        } else {
                            button.style.backgroundColor = '#cccccc';
                        }
                    }}
                    onMouseLeave={(event) => {
                        const button = event.target as HTMLButtonElement;
                        button.style.backgroundColor =
                            topic === selectedTopic ? '#0e58a1' : '#d9d9d9';
                    }}
                    className="topic-button">
                    {topic}
                </button>
            ))}
        </div>
    );

    useEffect(() => {
        if (selectedTopic === 'All') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post) => post.topic === selectedTopic)
            );
        }
    }, [selectedTopic]);

    return (
        <div
            style={{
                width: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <Header />
            <NavBar />
            <h2>Blog</h2>
            {topicButtons}
            <div>
                {filteredPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <Link to={`/blog/${post.id}`} className="blog-link">
                            {post.title}
                        </Link>
                        <p className="blog-date">
                            {post.date} - {post.topic}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
