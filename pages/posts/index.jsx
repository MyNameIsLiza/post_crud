import {useEffect} from "react";
import {useStore} from 'effector-react';
import {$posts, getPostsFx, deletePostFx} from '../../store';
import Router from "next/router";

function PostsPage() {
    const state = useStore($posts);
    useEffect(() => {
        if (!state.length) {
            getPostsFx();
        }
    }, [])
    return (
        <>
            <h1>Posts</h1>
            <button onClick={() => {
                Router.push('/posts/add');
            }}>Add post
            </button>
            {
                state.length ? <table>
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
                    {state.map((el) =>
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.userId}</td>
                            <td>{el.title}</td>
                            <td>{el.body}</td>
                            <td>
                                <button onClick={() => {
                                    Router.push(`/posts/edit/${el.id}`);
                                }}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    deletePostFx(el.id)
                                }}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table> : <p>Posts are missing</p>
            }

        </>
    )
}

export default PostsPage;
