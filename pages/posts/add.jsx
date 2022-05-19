import AddEditForm from "../../components/AddEditForm.jsx";
import Router from "next/router";

export default function AddPostPage() {

    return <>
    <h1>Add post page</h1>
        <AddEditForm/>
        <button onClick={() => {
            Router.push('/posts');
        }}>Go to posts
        </button>
    </>
}
