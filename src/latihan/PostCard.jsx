import { useState } from 'react';

/* eslint-disable react/prop-types */
function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      className={`rounded-lg p-6 shadow ${clicked ? 'bg-blue-100' : 'bg-white'}`}
      onClick={() => setClicked(true)}
    >
      <h2 className="mb-3 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </article>
  );
}

export default PostCard;
