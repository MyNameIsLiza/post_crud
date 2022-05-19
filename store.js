import {createStore, createEffect} from "effector";

const url = 'https://jsonplaceholder.typicode.com/posts';

const getPostsFx = createEffect(async () => {
    const response = await fetch(`${url}`);
    return await response.json();
});

const deletePostFx = createEffect(async (id) => {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    return id;
});

const $posts = createStore([])
    .on(getPostsFx.doneData, (list, res) => {
        return [...res]
    })
    .on(deletePostFx, (list, id) => {
        const shallowList = [...list];
        const index = shallowList.findIndex((item) => item.id === id);
        if (index !== -1) {
            shallowList.splice(index, 1);
        }
        return shallowList;
    })

export {$posts, getPostsFx, deletePostFx}
