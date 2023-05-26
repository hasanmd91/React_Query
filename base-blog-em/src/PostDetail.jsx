import { useQuery, useMutation } from "@tanstack/react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const { data, isLoading, isError, error } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );

  const deleteMutations = useMutation(() => deletePost(post.id));
  const updateMutations = useMutation(() => updatePost(post.id));

  console.log(updateMutations.mutate);

  if (isLoading) return <>Loading...</>;
  if (isError)
    return (
      <>
        something went wrong <span>{error.tostring()}</span>
      </>
    );

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutations.mutate()}>Delete</button>{" "}
      {deleteMutations.isError && (
        <p style={{ color: "red" }}> something went wrong</p>
      )}
      {deleteMutations.isLoading && (
        <p style={{ color: "green" }}> something is Loading</p>
      )}
      {deleteMutations.isSuccess && (
        <p style={{ color: "purple" }}> something is deleted</p>
      )}
      <button onClick={() => updateMutations.mutate(post.id)}>
        Update title
      </button>
      {updateMutations.isSuccess && (
        <p style={{ color: "green" }}> somthing is updated</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
