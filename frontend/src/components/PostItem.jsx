import React from 'react';
import { Link } from 'react-router-dom';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.716c-1.123 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const PostItem = ({ post, currentUser, handleDelete }) => {
  const isAuthor = currentUser && currentUser._id === post.user;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* This div is changed from items-start to items-center for alignment */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="font-bold text-blue-600 hover:underline">
            <Link to={`/profile/${post.user}`}>{post.name}</Link>
          </div>
          <p className="text-gray-500 text-sm">
            Posted on {new Date(post.date).toLocaleString()}
          </p>
        </div>
        {/* This will now only render if isAuthor is true AND handleDelete is provided */}
        {isAuthor && handleDelete && (
          <button
            onClick={() => handleDelete(post._id)}
            className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100"
            title="Delete post"
          >
            <TrashIcon />
          </button>
        )}
      </div>
      <p className="text-gray-800">{post.text}</p>
    </div>
  );
};

export default PostItem;