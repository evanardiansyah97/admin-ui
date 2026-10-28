import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { getPosts } from './Services';

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const data = await getPosts();
        if (isMounted) {
          setPosts(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message || 'Gagal mengambil data post.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        Post Cards
      </h1>

      {loading && (
        <p className="text-center text-gray-600" role="status">
          Memuat post...
        </p>
      )}
      {!loading && error && (
        <p className="text-center text-red-600" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Exercise;
