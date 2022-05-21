import {$posts} from '../../../store'
import {useStore} from "effector-react";
import AddEditForm from "../../../components/AddEditForm";
import {useRouter} from "next/router";

export default function EditPostPage() {
    const router = useRouter();
    const { id } = router.query
    const state = useStore($posts);
    const post = state.find((el)=>+el.id===+id);

    return <div className='content'>
        <h1>Edit post page</h1>
        <AddEditForm data={post}/>
        <button onClick={() => {
            router.push('/posts');
        }}>Go to posts
        </button>
    </div>
}
