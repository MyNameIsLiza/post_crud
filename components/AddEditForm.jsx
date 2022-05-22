import {useCallback, useState} from "react";
import {addPostFx, editPostFx, replacePostFx} from "../store";
import { useRouter } from 'next/router';
import styles from '../styles/Form.module.css'

export default function AddEditForm({data = {}}) {
    const [post, setPost] = useState(data);
    const router = useRouter();

    const submitForm = useCallback((e) => {
        e.preventDefault();
        if(!post.id){
            addPostFx(post);
        }
        router.push('/posts');
    }, [post, router]);

    return <form onSubmit={submitForm} className={styles.form}>
        <label>User id
            <input type="number" value={post.userId} onChange={(e) =>
                setPost({...post, userId: e.target.value})}/>
        </label>
        <label>Title
            <input type="text" value={post.title} onChange={(e) =>
                setPost({...post, title: e.target.value})}/>
        </label>
        <label>Body
            <textarea value={post.body} onChange={(e) =>
                setPost({...post, body: e.target.value})}/>
        </label>
        {post.id ? <>
            <button onClick={() => {
                editPostFx(post);
            }
            }>Edit</button>
            <button onClick={() => {
                replacePostFx(post);
            }
            }>Replace</button>
        </> : <button type='submit'>Submit</button>}
    </form>
}
