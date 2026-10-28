const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  const response = await fetch(POSTS_URL);

  if (!response.ok) {
    throw new Error(`Gagal mengambil data post (${response.status}).`);
  }

  return response.json();
}
