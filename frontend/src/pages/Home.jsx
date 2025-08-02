import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PostItem from '../components/PostItem';
import CreatePost from '../components/CreatePost';

const Home = ({ isAuthenticated, user }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await api.get('/posts');
                setPosts(res.data);
            } catch (err) {
                console.error("HOME PAGE: Error fetching posts!", err);
            }
        };
        fetchPosts();
    }, []);

    const handlePostCreated = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Public Feed</h1>
            {isAuthenticated && <CreatePost onPostCreated={handlePostCreated} />}
            <div className="space-y-4">
                {posts.map((post) => (
                    // We no longer pass the handleDelete prop here
                    <PostItem
                        key={post._id}
                        post={post}
                        currentUser={user}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;