import {$posts} from '../../../store'
import {useStoreMap} from "effector-react";
import AddEditForm from "../../../components/AddEditForm";
import {useRouter} from "next/router";

export default function EditPostPage() {
    const router = useRouter();
    const {id} = router.query;
    const post = useStoreMap({
        store: $posts,
        keys: [id],
        fn: (posts, [postId]) => posts.find(({id}) => +id === +postId),
    })

    return <div className='content'>
        <h1>Edit post page</h1>
        <AddEditForm data={post}/>
        <button onClick={() => {
            router.push('/posts');
        }}>Go to posts
        </button>
    </div>
}
