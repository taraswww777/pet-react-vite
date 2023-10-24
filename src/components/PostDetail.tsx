import {postApi} from '../rtk/api/postApi/postApi.ts';
import {PostDto} from '../rtk/api/postApi/PostDto.ts';

interface PostsDetailProps {
  postId: PostDto['id']
}

export const PostsDetail = ({postId}: PostsDetailProps) => {
  const {data, error, isLoading} = postApi.useGetPostItemByIdQuery(postId);


  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ol>
          <li>{data.id}</li>
          <li>{data.title}</li>
          <li>{data.userId}</li>
          <li>{data.body}</li>
        </ol>
      ) : null}

    </div>
  )
}
