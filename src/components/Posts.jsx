import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading Posts...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Content Found!</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="text-xl font-semibold my-4">
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
  return <div className="">{content}</div>;
};
export default Posts;
