import {$posts} from '../../../store'
import {useStore} from "effector-react";
import AddEditForm from "../../../components/AddEditForm";
import Router, {useRouter} from "next/router";

export default function EditPostPage() {
    const router = useRouter();
    const { id } = router.query
    const state = useStore($posts);
    const post = state.find((el)=>+el.id===+id);

    return <>
        <h1>Edit post page</h1>
        <AddEditForm data={post}/>
        <button onClick={() => {
            Router.push('/posts');
        }}>Go to posts
        </button>
    </>
}
