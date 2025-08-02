import React, { useState } from 'react';
import api from '../services/api';

const CreatePost = ({ onPostCreated }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            const res = await api.post('/posts', { text });
            onPostCreated(res.data);
            setText('');
        } catch (err) {
            // It's good practice to keep the error log
            console.error('Failed to create post:', err); 
            alert('Failed to create post.');
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's on your mind?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="3"
                    required
                ></textarea>
                <div className="text-right mt-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;