import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import PostItem from '../components/PostItem';
import ConfirmationModal from '../components/ConfirmationModal';

const Profile = ({ currentUser }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  
  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const [userRes, postsRes] = await Promise.all([
          api.get(`/users/${userId}`),
          api.get(`/posts/user/${userId}`)
        ]);
        setUser(userRes.data);
        setPosts(postsRes.data);
      } catch (err) {
        console.error('Failed to fetch profile data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [userId]);

  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setIsModalOpen(true);
  };
  
  const confirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await api.delete(`/posts/${postToDelete}`);
      setPosts(posts.filter((post) => post._id !== postToDelete));
    } catch (err) {
      console.error('Failed to delete post', err);
      alert('Failed to delete post.');
    } finally {
      setIsModalOpen(false);
      setPostToDelete(null);
    }
  };

  // --- GUARD CLAUSE 1: Handle Loading State ---
  if (loading) {
    return <div className="text-center mt-8">Loading profile...</div>;
  }

  // --- GUARD CLAUSE 2: Handle User Not Found State ---
  if (!user) {
    return <div className="text-center mt-8">User not found.</div>;
  }

  // This 'return' will only be reached if loading is false AND user is not null
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mt-1">{user.email}</p>
          <p className="mt-4 text-gray-700">{user.bio}</p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800">Posts by {user.name}</h3>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostItem
                key={post._id}
                post={post}
                currentUser={currentUser}
                handleDelete={handleDeleteClick}
              />
            ))
          ) : (
            <p>This user has not made any posts yet.</p>
          )}
        </div>
      </div>
      
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Post"
        message="Are you sure you want to permanently delete this post?"
      />
    </>
  );
};

export default Profile;