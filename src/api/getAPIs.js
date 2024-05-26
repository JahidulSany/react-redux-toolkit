export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return response.json();
};
