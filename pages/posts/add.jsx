import AddEditForm from "../../components/AddEditForm.jsx";
import { useRouter } from 'next/router';

export default function AddPostPage() {
    const router = useRouter();

    return <div className='content'>
    <h1>Add post page</h1>
        <AddEditForm/>
        <button onClick={() => {
            router.push('/posts');
        }}>Go to posts
        </button>
    </div>
}
