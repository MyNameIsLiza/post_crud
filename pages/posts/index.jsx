import {useEffect} from "react";
import {useList, useStore} from 'effector-react';
import {$posts, deletePostFx, PostsGate} from '../../store';
import {useRouter} from 'next/router';

const PostsTable = () => {
    const router = useRouter();

    return <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {useList($posts, ({id, userId, title, body}) => {
            return <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>{body}</td>
                <td>
                    <button onClick={() => {
                        router.push(`/posts/edit/${id}`);
                    }}>Edit
                    </button>
                </td>
                <td>
                    <button onClick={() => {
                        deletePostFx(id)
                    }}>Delete
                    </button>
                </td>
            </tr>
        })}
        </tbody>
    </table>
}

function PostsPage() {
    const state = useStore($posts);
    const router = useRouter();

    useEffect(() => {
        if (!state.length) {
            //getPostsFx();
        }
    }, [])
    return (
        <div className='content'>
            <h1>Posts</h1>
            <button onClick={() => {
                router.push('/posts/add');
            }}>Add post
            </button>
            {
                state.length ? <PostsTable/> : <p>Posts are missing</p>
            }
            <PostsGate/>
        </div>
    )
};

export default PostsPage;
