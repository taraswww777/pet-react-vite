import {postApi} from '../rtk/api/postApi/postApi.ts';
import {useState} from 'react';
import {PostDto} from '../rtk/api/postApi/PostDto.ts';
import {PostsDetail} from './PostDetail.tsx';

export const Posts = () => {
  const {data, error, isLoading} = postApi.useGetPostListQuery({});
  const [openPostId, setOpenPostId] = useState<PostDto['id']>();


  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ol>
          {data.map((post) => (
            <li key={post.id}>
              <h2 onClick={() => setOpenPostId(post.id)}>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ol>
      ) : null}

      {openPostId && <PostsDetail postId={openPostId} />}
    </div>
  )
}
