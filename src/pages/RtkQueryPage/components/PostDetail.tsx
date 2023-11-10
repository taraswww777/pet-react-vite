import {postApi} from '../../../rtk/api/postApi/postApi.ts';
import {PostDto} from '../../../rtk/api/postApi/PostDto.ts';
import {useAppSelector} from '../../../rtk/hooks.ts';

interface PostsDetailProps {
  postId: PostDto['id']
}

export const PostsDetail = ({postId}: PostsDetailProps) => {
  const {data, error, isLoading} = postApi.useGetPostItemByIdQuery(postId);

  // const selectPost = useMemo(
  //   () => postApi.endpoints?.getPostItemById.select(postId),
  //   [postId]
  // )
  // const all = useAppSelector(selectPost)
  const all = useAppSelector(postApi.endpoints?.getPostItemById.select(postId))
  const {data: allData} = all;

  return (
    <div className="App">
      <p>all:{JSON.stringify(all)}</p>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data && allData ? (
        <div>
          <ol>
            <li>{data.id}</li>
            <li>{data.title}</li>
            <li>{data.userId}</li>
            <li>{data.body}</li>
          </ol>
          <p>from allData</p>
          <ol>
            <li>{allData.id}</li>
            <li>{allData.title}</li>
            <li>{allData.userId}</li>
            <li>{allData.body}</li>
          </ol>
        </div>
      ) : null}

    </div>
  )
}
